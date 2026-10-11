import os
import re

yaml_files = [
    '_config.yml',
    '_data/publications.yml',
    '_data/news.yml',
    '_data/talks.yml',
    '_data/service.yml',
    '_data/research.yml',
    '_data/students.yml',
    '_data/teaching.yml',
    '_data/faq.yml'
]

html_files = [
    '_layouts/default.html',
    '_includes/head.html',
    '_includes/nav.html',
    '_includes/footer.html',
    '_includes/pub-item.html',
    '_includes/phd-schema.html',
    'index.html',
    'publications.html',
    'phd/index.html',
    'supervision.html',
    'teaching.html'
]

print("--- Validating YAML files ---")
for yf in yaml_files:
    if not os.path.exists(yf):
        print(f"MISSING: {yf}")
        continue
    with open(yf, 'r', encoding='utf-8') as f:
        content = f.read()
    print(f"OK ({len(content)} bytes): {yf}")

print("\n--- Validating HTML files and Liquid tags ---")
for hf in html_files:
    if not os.path.exists(hf):
        print(f"MISSING: {hf}")
        continue
    with open(hf, 'r', encoding='utf-8') as f:
        content = f.read()
    # Check open/close braces
    open_tags = len(re.findall(r'\{%', content))
    close_tags = len(re.findall(r'%\}', content))
    open_vars = len(re.findall(r'\{\{', content))
    close_vars = len(re.findall(r'\}\}', content))
    if open_tags != close_tags:
        print(f"ERROR: Mismatched {{% in {hf}: {open_tags} open vs {close_tags} close")
    elif open_vars != close_vars:
        print(f"ERROR: Mismatched {{{{ in {hf}: {open_vars} open vs {close_vars} close")
    else:
        print(f"OK ({len(content)} bytes, {open_tags} tags, {open_vars} vars): {hf}")

print("\nValidation finished.")
