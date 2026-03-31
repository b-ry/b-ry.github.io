# b-ry.github.io

Personal portfolio site for Bryon Urbanec — UI/UX Designer & Front-end Developer.

Built with [Next.js 15](https://nextjs.org/) and deployed to GitHub Pages via GitHub Actions.

## Stack

- **Framework:** Next.js 15 (static export)
- **Language:** TypeScript
- **Styles:** SCSS Modules + global SCSS
- **Content:** Markdown files parsed with gray-matter and remark
- **Animations:** GSAP
- **Fonts:** Outfit (variable font, self-hosted via `next/font/local`)
- **Deploy:** GitHub Actions → GitHub Pages

## Getting started

```bash
# Install dependencies
npm install

# Start dev server (Turbopack)
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Content

Content lives in the `content/` directory, organized by type:

```
content/
  job/      # Work experience entries
  work/     # Portfolio projects
  lab/      # Experimental projects
  posts/    # Blog posts
```

Each file is a Markdown file with YAML frontmatter.

## Building & deploying

Pushing to `master` triggers the GitHub Actions workflow which builds the static site and deploys it to GitHub Pages automatically.

```bash
# Build static export locally
npm run build
```

Output is written to `./out`.
