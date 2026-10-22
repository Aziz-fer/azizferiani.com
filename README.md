# azizferiani.com

Personal website of Aziz Feriani: portfolio, CV and books, in English, German and Arabic.

Built with [Astro](https://astro.build) and Tailwind CSS. The site is fully static and is deployed on Vercel. Every push to `main` goes live.

## Run it locally

```sh
npm install
npm run dev        # http://localhost:4321, reloads on save
npm run build      # production build into dist/
npm run preview    # serve the production build
```

## Where things live

| What | File |
|---|---|
| Name, role, intro, about text, experience, education, skills, languages, certifications, links | `src/data/profile.ts` |
| Projects (with filters) | `src/data/projects.ts` |
| Buttons, headings, menu labels (all three languages) | `src/i18n/ui.ts` |
| Books | `src/content/books/*.md` |
| Colors (night and dawn themes) | `src/styles/global.css` (top of file) |
| Photo | `src/assets/aziz.jpg` |
| Social preview images | `public/og.png`, `public/og-carthage.png` |

Every text has an `en`, `de` and `ar` version. Change all three, and the matching pages update.

## Add a new book

1. Put the cover and illustrations in `src/assets/books/<slug>/`. `<slug>` is a short Latin name, such as `carthage`.
2. Put the PDF in `public/books/<slug>/`.
3. Copy `src/content/books/carthage.md` to `src/content/books/<slug>.md` and edit its fields:
   - The text after the second `---` is the excerpt shown under "Read the opening".
   - Set `order` to choose the book's position on the shelf.
   - Set `translationsComing: false` once a translation exists.
   - Optional: put a 1200×630 preview image for social media in `public/` and point `ogImage` at it. Without one, the site's main preview image is used.
4. Run `npm run build`. The bookshelf, the book page in all three languages and the sitemap update automatically.

## Pages

| Route | English | German | Arabic |
|---|---|---|---|
| Home | `/` | `/de/` | `/ar/` |
| Bookshelf | `/books/` | `/de/books/` | `/ar/books/` |
| Book page | `/books/carthage/` | `/de/books/carthage/` | `/ar/books/carthage/` |
| Printable CV (Save as PDF) | `/cv/` | `/de/cv/` | `/ar/cv/` |
