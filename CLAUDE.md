# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Information

- **Project Name**: DEV GATE
- **Live Site**: https://dev-gate.netlify.app
- **Framework**: Astro v5
- **Deployment**: Netlify (automatic from main branch)

## Development Commands

### Core Commands
- `npm run dev` - Start development server
- `npm run build` - Build the project for production
- `npm run preview` - Preview the built site locally
- `npm start` - Serve the built site on port 5000

### Development Server
The development server runs on the default Astro port. Use `npm run dev` to start development.

## Project Architecture

This is an Astro-based blog with MDX support, built for sharing technical content in Spanish.

### Content Architecture
The project uses Astro's content collections with two main content types:
- **blog** (`src/content/blog/`) - Main blog posts
- **tutorials** (`src/content/tutorials/`) - Tutorial content

Both collections share the same schema defined in `src/content/config.ts`:
- `title` (string) - Post title
- `description` (string) - Post description
- `pubDate` (date) - Publication date
- `updatedDate` (date, optional) - Last updated date
- `heroImage` (string, optional) - Hero image URL

### Key Components
- `src/layouts/BlogPost.astro` - Main layout for blog posts and tutorials
- `src/components/Header.astro` - Site navigation
- `src/components/Footer.astro` - Site footer
- `src/components/comments/PostComments.astro` - Comments component for posts
- `src/components/BaseHead.astro` - HTML head configuration

### Site Configuration
- **Site URL**: `https://dev-gate.netlify.app` (configured in `astro.config.mjs`)
- Site constants are defined in `src/consts.ts`:
  - `SITE_TITLE`: "DEV GATE"
  - `SITE_DESCRIPTION`: Professional description for SEO
- Astro configuration in `astro.config.mjs` includes:
  - MDX integration for enhanced markdown
  - Sitemap generation (automatic)
  - Site URL for absolute URLs in sitemap/RSS
- TypeScript configuration extends Astro's base with strict null checks

### Content Structure
- Blog posts: `/blog/[...slug]` route
- Tutorials: `/tutorials/[...slug]` route
- Index pages for both content types
- RSS feed available at `/rss.xml`
- About page at `/about`

### Styling
Global styles are defined in `src/styles/global.css`. Components use scoped styles within Astro files.

## Content Management

When adding new content:
1. Create `.md` files in appropriate content directory (`src/content/blog/` or `src/content/tutorials/`)
2. Include required frontmatter fields (title, description, pubDate)
3. Optionally add heroImage and updatedDate
4. Content is automatically available through dynamic routes

The site supports both Spanish and technical English content, with a focus on development tutorials and software engineering topics.