# Overview

## Tasks

1. Detail problem statement, solution goal, personal goals some design, requirements, architecture
1. Render spreadsheet data in chart (chart js for ease)
   1. Assess performance, ease of working with data

## Learning

- Technical
   - React + TS practice
   - CSS => explore modern techniques/framework
      - Sass + CSS Modules - https://vite.dev/guide/features#css-pre-processors
   - Vite - public vs assets
      - source: https://vite.dev/guide/assets.html#the-public-directory
      - `assets`:
         - e.g. `import imgUrl from './img.png'`
         - For example, `imgUrl` will be `/img.png` during development, and become `/assets/img.2d8efhg.png` in the production build.
      - `public`:
         - If you have assets that are:
           - Never referenced in source code (e.g. robots.txt)
           - Must retain the exact same file name (without hashing)
           - ...or you simply don't want to have to import an asset first just to get its URL
         - Assets in this directory will be served at root path `/` during dev, and copied to the root of the dist directory as-is.

## Tools

- Build: Vite
- Language: Typescript
- Frontend: React, Sass, CSS Modules