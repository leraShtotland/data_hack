# Horvitz Reveal Website

This project bootstraps a modern front-end environment for the Horvitz Reveal marketing site. It ships with a basic landing page and a Vite-powered developer workflow so you can iterate quickly on content and design.

## Prerequisites

- [Node.js](https://nodejs.org/) 18 or later
- npm 9 or later (included with Node.js)

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```
   The site will be available at the URL shown in your terminal (defaults to `http://localhost:5173`). Vite supports hot module replacement, so edits to `src/` files reload automatically.
3. Create a production build:
   ```bash
   npm run build
   ```
4. Preview the production build locally:
   ```bash
   npm run preview
   ```

## Project Structure

```
horvitz-reveal/
├── index.html         # Entry HTML file consumed by Vite
├── package.json       # Project metadata and scripts
├── src/
│   ├── main.js        # JavaScript entry point
│   ├── style.css      # Global styles
│   └── assets/
│       └── logo.svg   # Placeholder logo
└── vite.config.js     # Vite configuration
```

## Customization Tips

- Update `src/style.css` to adjust the theme colors, fonts, and layout.
- Modify the hero copy inside `src/main.js` to reflect the latest messaging for the Horvitz Reveal launch.
- Replace the placeholder logo (`src/assets/logo.svg`) with the final brand asset once it is ready.
- Add new sections by appending HTML snippets to the `app.innerHTML` template in `src/main.js` or by introducing a component system if you decide to adopt a framework later.

## Deployment

Any static hosting provider (Netlify, Vercel, GitHub Pages, S3, etc.) can serve the output of `npm run build`. The compiled assets are placed in the `dist/` directory.

## Linting and Formatting

Vite works out-of-the-box with many JavaScript tooling options. Consider adding ESLint and Prettier once the project grows, so the codebase remains maintainable as the site evolves.
