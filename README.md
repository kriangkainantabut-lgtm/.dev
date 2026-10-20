# Kriangkai Nantabut | Portfolio

เว็บพอร์ตโฟลิโอ IT Support & Backend API (ไทย / EN / 中文) มีโหมดมืด/สว่าง และขยายรูปเมื่อคลิก/ชี้เมาส์

Single-page portfolio in Thai / English / Chinese with light/dark mode and image zoom.
Plain HTML, CSS and JavaScript. No build step.

## Structure

```
.
├── index.html                  # main page (markup only)
├── 404.html                    # not-found page (self-contained)
├── favicon.svg
├── .nojekyll                   # serve files as-is on GitHub Pages
├── .gitignore
├── .github/workflows/pages.yml # optional: deploy with GitHub Actions
└── assets/
    ├── css/style.css           # styles, light/dark theme tokens
    ├── js/main.js              # translations, theme toggle, image zoom
    └── img/                    # project screenshots (.webp)
```

## Deploy on GitHub Pages

Choose ONE of the two options.

### Option A: Deploy from a branch (simplest)
1. Create a repository and push everything in this folder (keep `assets/`).
2. **Settings → Pages → Build and deployment → Source: Deploy from a branch**, branch `main`, folder `/ (root)`.

### Option B: GitHub Actions
1. Push everything, including `.github/workflows/pages.yml`.
2. **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. Every push to `main` redeploys automatically.

Live URL: `https://<username>.github.io/<repository>/`

If the site is a project site (not `<username>.github.io`), set `BASE = "/<repository>/"` in `404.html`.

## Edit content

- Text and translations: the `T` object at the top of `assets/js/main.js`.
- Colors: CSS variables at the top of `assets/css/style.css`.
- Images: replace files in `assets/img/` and keep the same names.

## Run locally

```
python3 -m http.server
```
then open http://localhost:8000
