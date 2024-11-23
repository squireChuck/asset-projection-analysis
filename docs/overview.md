# Overview

## Tasks

1. Detail problem statement, solution goal, personal goals some design, requirements, architecture
1. Render spreadsheet data in chart (chart js for ease)
   1. Assess performance, ease of working with data


Open questions
- Validate data ahead of time? e.g. what if there are missing quarters? some portfolios have fewer attributes than others?

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
   - Chart.js (react-chartjs-2)
      - https://medium.com/@pdx.lucasm/canvas-with-react-js-32e133c05258
      - https://www.chartjs.org/docs/latest/samples/line/line.html
      - pulled in files from https://github.com/reactchartjs/react-chartjs-2/tree/master
## Tools

- Runtime: Node v20
- Build: Vite
- Language: Typescript
- Frontend: React, Sass, CSS Modules

## Future ideas

- autoprefixer (browser prefixes on styles): https://autoprefixer.github.io/
   - https://stackoverflow.com/questions/71415014/how-to-use-autoprefixer-with-vitejs-and-react