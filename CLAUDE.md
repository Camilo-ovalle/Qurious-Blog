# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 🚨 CRITICAL: Learning-First Approach

**BEFORE implementing ANY new feature, component, or code change:**

1. ✅ **ALWAYS give Camilo a relevant challenge first** (see `LEARNING-CHALLENGES.md`)
2. ✅ **Wait for him to attempt it** (5-30 minutes depending on complexity)
3. ✅ **Compare solutions and explain differences**
4. ✅ **THEN implement together** with full understanding

**This is NOT optional. The goal is LEARNING, not just getting code done.**

### Challenge Selection Rules:
- For new components → Give component creation challenge
- For new pages/routes → Give routing/getStaticPaths challenge
- For logic/filters → Give data manipulation challenge
- For styling → Give CSS/responsive challenge

**Reference**: All challenges are documented in `LEARNING-CHALLENGES.md`

**Current User Level**: 🟢 Aprendiz (0 retos completados)

**Next Challenge Ready**: Reto 2.1 - DifficultyBadge component

---

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

Both collections share the same enhanced schema defined in `src/content/config.ts`:

**Core Fields:**
- `title` (string) - Post title
- `description` (string) - Post description
- `pubDate` (date) - Publication date
- `updatedDate` (date, optional) - Last updated date

**Image Fields:**
- `heroImage` (string, optional) - Hero image URL
- `heroImageAlt` (string, optional) - Alt text for accessibility

**Organization & Discovery:**
- `tags` (array of strings, default: []) - Tags for content organization
- `category` (enum: 'tutorial' | 'blog' | 'guide', default: 'blog') - Content type
- `difficulty` (enum: 'beginner' | 'intermediate' | 'advanced', optional) - Difficulty level
- `estimatedReadTime` (number, optional) - Reading time in minutes
- `author` (string, default: 'Camilo Ovalle') - Post author
- `draft` (boolean, default: false) - Publication control

**Example frontmatter:**
```yaml
---
title: "My Post Title"
description: "Post description for SEO"
pubDate: "2025-10-09"
heroImage: "/image.jpg"
heroImageAlt: "Descriptive alt text"
tags: ["git", "github", "tutorial"]
category: "tutorial"
difficulty: "beginner"
estimatedReadTime: 10
---
```

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

## Code Quality Tools

### Linting & Formatting
- **ESLint**: Configured with `eslint-plugin-astro` for code quality checks
- **Prettier**: Configured with `prettier-plugin-astro` for automatic formatting
- **Pre-commit Hooks**: Husky runs lint and format checks before every commit

**Available Scripts:**
```bash
npm run lint          # Check for code errors
npm run format        # Auto-format all code
npm run format:check  # Check formatting without modifying
```

### Pre-commit Hook Behavior
When you run `git commit`, the following happens automatically:
1. ESLint checks for errors → Blocks commit if errors found
2. Prettier checks formatting → Blocks commit if not formatted
3. If all checks pass → Commit is created

**To pass pre-commit checks:**
```bash
npm run format  # Format code
npm run lint    # Check for errors
git commit -m "message"  # Will pass hooks
```

## Content Management

When adding new content:
1. Create `.md` files in appropriate content directory (`src/content/blog/` or `src/content/tutorials/`)
2. Include required frontmatter fields (title, description, pubDate)
3. Optionally add heroImage and updatedDate
4. Content is automatically available through dynamic routes

The site supports both Spanish and technical English content, with a focus on development tutorials and software engineering topics.