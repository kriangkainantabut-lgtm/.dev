# Kriangkai Nantabut | Portfolio

เว็บพอร์ตโฟลิโอ IT Support & Backend API (ไทย / EN / 中文) มีโหมดมืด/สว่าง และขยายรูปเมื่อชี้เมาส์

Single-page portfolio in Thai / English / Chinese with light/dark mode and hover-to-zoom images.
Plain HTML, CSS and JavaScript. No build step.

## Structure

```
.
├── index.html            # main page
├── 404.html              # not-found page
├── favicon.svg
├── .nojekyll             # serve files as-is on GitHub Pages
├── .gitignore
├── README.md
└── assets/
    ├── css/style.css     # styles, light/dark theme tokens
    ├── js/main.js        # translations, theme toggle, image zoom
    └── img/              # project screenshots (.webp)
```

## Deploy on GitHub Pages

1. Create a repository, e.g. `kriangkai-portfolio` (or `<username>.github.io`).
2. Upload everything in this folder to the repository root, keeping `assets/`.
3. **Settings → Pages → Build and deployment**: *Deploy from a branch*, branch `main`, folder `/ (root)`.
4. The site goes live at `https://<username>.github.io/<repository>/`.

## Edit content

- Text and translations: the `T` object at the top of `assets/js/main.js`.
- Colors: CSS variables at the top of `assets/css/style.css`.
- Images: replace files in `assets/img/` and keep the same names.

## Run locally

```
python3 -m http.server
```
then open http://localhost:8000
