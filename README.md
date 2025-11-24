# Grisha - Personal Portfolio

This is a Next.js project initialized with Tailwind CSS v4, TypeScript, and Framer Motion.

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `app/`: Next.js App Router pages and layout.
- `components/`: React components.
- `content/`: Markdown files for cases.
  - `personal-cases/`: Personal projects.
  - `work-cases/`: Work projects.
- `lib/`: Utility functions.
- `public/`: Static assets (fonts, images).

## Adding Cases

To add a new case, create a `.md` file in `content/personal-cases/` or `content/work-cases/`.

Format:

```markdown
---
title: "Project Name"
description: "Short description"
image: "/images/cases/project.png"
tags: ["Tag1", "Tag2"]
date: "2024"
---

# Header

Content goes here...
```

## Fonts

- **Manrope** (Google Fonts) - Base text
- **Onest** (Google Fonts) - Headings
- **Fliege Mono** (Space Mono fallback) - Buttons and Technical text

## Styling

Styles are defined in `app/globals.css` using Tailwind v4 `@theme` directives.

Colors:
- Base Text: `#24242499`
- Heading: `#242424`
- Active Icon: `#2CAEFF`
