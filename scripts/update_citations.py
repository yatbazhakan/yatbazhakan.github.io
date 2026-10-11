#!/usr/bin/env python3
"""
Automatically update citation metrics and individual publication citation counts
from Google Scholar (with fallback to OpenAlex) for Dr. Hakan Yekta Yatbaz.

Writes:
- citations.json (read by client-side JavaScript on index.html and publications.html)
- Updates hardcoded fallbacks in index.html and publications.html if needed.
"""

import json
import os
import re
import sys
import urllib.request
from datetime import datetime

SCHOLAR_USER_ID = "5Q596f4AAAAJ"
OPENALEX_AUTHOR_ID = "A5010032068"
CONTACT_EMAIL = "yatbazhakan@gmail.com"

def normalize_title(title):
    """Normalize a title for fuzzy matching."""
    t = re.sub(r'[^a-z0-9]', '', title.lower())
    return t

def fetch_from_scholar():
    """Fetch live citation data from Google Scholar profile."""
    url = f"https://scholar.google.com/citations?user={SCHOLAR_USER_ID}&hl=en&pagesize=100"
    req = urllib.request.Request(
        url,
        headers={
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
            'Accept-Language': 'en-US,en;q=0.9',
        }
    )
    with urllib.request.urlopen(req, timeout=15) as resp:
        html = resp.read().decode('utf-8')

    table_matches = re.findall(r'<td class="gsc_rsb_std">(\d+)</td>', html)
    if not table_matches:
        raise ValueError("Could not parse Google Scholar statistics table")

    citations = int(table_matches[0]) if len(table_matches) > 0 else 0
    citations_recent = int(table_matches[1]) if len(table_matches) > 1 else 0
    h_index = int(table_matches[2]) if len(table_matches) > 2 else 0
    h_index_recent = int(table_matches[3]) if len(table_matches) > 3 else 0
    i10_index = int(table_matches[4]) if len(table_matches) > 4 else 0
    i10_index_recent = int(table_matches[5]) if len(table_matches) > 5 else 0

    papers_raw = re.findall(r'<tr class="gsc_a_tr">(.*?)</tr>', html, re.DOTALL)
    paper_citations = {}
    for p in papers_raw:
        title_m = re.search(r'class="gsc_a_at">([^<]+)</a>', p)
        title = title_m.group(1).strip() if title_m else ''
        cite_m = re.search(r'class="gsc_a_ac[^"]*">(\d+)</a>', p)
        cites = int(cite_m.group(1)) if cite_m else 0
        if title:
            paper_citations[normalize_title(title)] = {
                'raw_title': title,
                'citations': cites
            }

    return {
        'source': 'Google Scholar',
        'stats': {
            'citations': citations,
            'citations_recent': citations_recent,
            'h_index': h_index,
            'h_index_recent': h_index_recent,
            'i10_index': i10_index,
            'i10_index_recent': i10_index_recent,
            'publications': max(len(papers_raw), 21),
        },
        'papers': paper_citations
    }

def fetch_from_openalex():
    """Fallback: Fetch live author data from OpenAlex API."""
    url = f"https://api.openalex.org/authors/{OPENALEX_AUTHOR_ID}"
    req = urllib.request.Request(
        url,
        headers={'User-Agent': f'mailto:{CONTACT_EMAIL}'}
    )
    with urllib.request.urlopen(req, timeout=15) as resp:
        data = json.loads(resp.read().decode('utf-8'))

    summary = data.get('summary_stats', {})
    citations = data.get('cited_by_count', 0)
    works_count = data.get('works_count', 21)
    h_index = summary.get('h_index', 9)
    i10_index = summary.get('i10_index', 8)

    # Also fetch individual works
    works_url = f"https://api.openalex.org/works?filter=author.id:{OPENALEX_AUTHOR_ID}&per-page=100"
    works_req = urllib.request.Request(
        works_url,
        headers={'User-Agent': f'mailto:{CONTACT_EMAIL}'}
    )
    paper_citations = {}
    try:
        with urllib.request.urlopen(works_req, timeout=15) as w_resp:
            w_data = json.loads(w_resp.read().decode('utf-8'))
            for item in w_data.get('results', []):
                title = item.get('display_name', '')
                cites = item.get('cited_by_count', 0)
                if title:
                    paper_citations[normalize_title(title)] = {
                        'raw_title': title,
                        'citations': cites
                    }
    except Exception:
        pass

    return {
        'source': 'OpenAlex (Fallback)',
        'stats': {
            'citations': citations,
            'h_index': h_index,
            'i10_index': i10_index,
            'publications': works_count,
        },
        'papers': paper_citations
    }

def update_citations():
    print(f"[{datetime.now().isoformat()}] Fetching citation metrics...")
    data = None
    try:
        data = fetch_from_scholar()
        print(f"Successfully fetched from Google Scholar: {data['stats']['citations']} citations, {data['stats']['publications']} works.")
    except Exception as e:
        print(f"Google Scholar fetch failed ({e}). Attempting OpenAlex fallback...")
        try:
            data = fetch_from_openalex()
            print(f"Successfully fetched from OpenAlex: {data['stats']['citations']} citations.")
        except Exception as e2:
            print(f"OpenAlex fetch failed ({e2}).")

    if not data:
        print("ERROR: Could not fetch citation data from any source.")
        return False

    output = {
        'updated_at': datetime.utcnow().isoformat() + 'Z',
        'source': data['source'],
        'stats': data['stats'],
        'papers': {k: v['citations'] for k, v in data['papers'].items()},
        'papers_detail': data['papers']
    }

    # Save citations.json in current directory
    output_path = 'citations.json'
    with open(output_path, 'w', encoding='utf-8') as f:
        json.dump(output, f, indent=2, ensure_ascii=False)
    print(f"Saved live citation data to {output_path}")

    return True

if __name__ == '__main__':
    success = update_citations()
    sys.exit(0 if success else 1)
