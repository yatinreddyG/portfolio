# Portfolio — Gujjula Yatin Reddy

A personal portfolio site built with React + Vite, showcasing full-stack and machine learning
projects (AI Resume Analyzer, Alzheimer's Disease Detection, MedPredict).

## Pages

- **Home** — intro, quick highlights, featured projects
- **About** — bio, education, skills
- **Projects** — full project grid, each linking to a dedicated case-study page
- **Contact** — email / GitHub / LinkedIn, resume download

## Running locally

```bash
npm install
npm run dev
```

Then open the URL it prints (usually `http://localhost:5173`).

## Building for production

```bash
npm run build
```

Output goes to `dist/`, which is what you'd deploy to Render, Vercel, Netlify, GitHub Pages, etc.

## Where to edit content

- `src/data/projects.js` — all project text, tech stack, links, and screenshots live here. Every
  page (Home's featured cards, the Projects grid, and each case-study page) pulls from this one
  file, so you only ever need to edit it in one place.
- `src/pages/About.jsx` — bio text, education, and skills groups (currently has placeholder text
  marked with `TODO` comments — replace with your real details).
- `src/pages/Contact.jsx` and `src/components/Footer.jsx` — your LinkedIn URL is still a
  placeholder (`#`) in both places; update once you have the link.
- `public/resume.pdf` — add your resume PDF here; the Contact page's "Download resume" button
  already points at `/resume.pdf`.
- Project screenshots: drop images into `src/assets/` (or `public/`) and reference them in each
  project's `screenshots` array in `src/data/projects.js`.

## Tech

React 19, Vite, React Router — no backend, fully static, deploys anywhere that serves static files.
