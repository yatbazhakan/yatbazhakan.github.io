# Dr. Hakan Yekta Yatbaz — Personal Website

Personal academic website for [yatbazhakan.github.io](https://yatbazhakan.github.io), built with Queen's University Belfast branding.

## Pages

| File | URL |
|---|---|
| `index.html` | Homepage (About, Research, EU Projects, PhD, Publications, News, Contact) |
| `publications.html` | Full publications list with filter by type/topic |
| `teaching.html` | Teaching history across QUB, Warwick, METU |
| `supervision.html` | PhD & student supervision |

## Adding Your Photo

1. Save your profile photo as **`photo.jpg`** in this folder
2. Push to GitHub — it will appear automatically in the hero section

## Deployment to GitHub Pages

### Option A — Replace existing site (recommended)

1. Clone your existing repo:
   ```bash
   git clone https://github.com/yatbazhakan/yatbazhakan.github.io
   cd yatbazhakan.github.io
   ```
2. Delete old files (keep `.git/`):
   ```bash
   rm -f *.html *.css *.js *.jsx
   ```
3. Copy all files from this folder into the repo
4. Add, commit and push:
   ```bash
   git add .
   git commit -m "New QUB-branded website"
   git push
   ```
5. Visit [https://yatbazhakan.github.io](https://yatbazhakan.github.io) — live in ~60 seconds

### Option B — GitHub web interface

1. Go to your repo on github.com
2. Upload all files via **Add file → Upload files**
3. Commit to `main`

## Updating Content

All text content can be edited directly in the HTML files. Key locations:

- **Name / Title / Email** — Open `index.html`, search for `TWEAK_DEFAULTS`
- **Bio** — Search for `About` function in `index.html`
- **Publications** — Edit `publications.html` (each paper is a `.pub-card` div)
- **PhD projects** — Search for `PhDSection` function in `index.html`
- **News items** — Search for `News` function in `index.html`
- **Teaching history** — Edit `teaching.html`
- **Students** — Edit `supervision.html`

## Live Tweaks

On the live site, click the **Tweaks** button (toolbar) to update your name, title, tagline, email, office and accent colour without editing code. Changes persist automatically.
