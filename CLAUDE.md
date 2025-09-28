# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15 e-commerce application called "elephent_shop" using the App Router architecture. The project is built with:

- **Next.js 15.5.4** with Turbopack for fast development builds
- **React 19.1.0** with TypeScript for type safety
- **Tailwind CSS 4** for styling with PostCSS integration
- **Geist fonts** (Sans and Mono) from Google Fonts

## Development Commands

```bash
# Start development server with Turbopack
npm run dev

# Build for production with Turbopack
npm run build

# Start production server
npm run start
```

## Project Structure

The project follows Next.js App Router conventions:

- `app/` - Main application directory using App Router
  - `layout.tsx` - Root layout with Geist fonts and global styling
  - `page.tsx` - Home page component
  - `globals.css` - Global styles with Tailwind imports and CSS custom properties
- `public/` - Static assets (SVG icons: file, globe, next, vercel, window)
- Root configuration files: `next.config.ts`, `tsconfig.json`, `postcss.config.mjs`

## Styling Architecture

The project uses Tailwind CSS 4 with a custom CSS variables system:
- Light/dark theme support via CSS custom properties in `globals.css`
- CSS variables: `--background`, `--foreground` with automatic dark mode detection
- Font variables: `--font-geist-sans`, `--font-geist-mono` configured in layout
- Tailwind configuration integrated via PostCSS with `@tailwindcss/postcss` plugin

## TypeScript Configuration

- Uses bundler module resolution with `@/*` path alias for root imports
- Strict mode enabled with incremental compilation
- Next.js plugin integrated for optimal TypeScript experience
- Target ES2017 with modern DOM libraries