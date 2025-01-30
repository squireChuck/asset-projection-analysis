# Overview

## Tasks

1. Detail problem statement, solution goal, personal goals some design, requirements, architecture
1. Render spreadsheet data in chart (chart js for ease)
   1. Assess performance, ease of working with data


Open questions
- Validate data ahead of time? e.g. what if there are missing quarters? some files have fewer assets/fewer attributes than others?

Visible projections
- As a user, I want to control which projections are visible in both charts so that it's easier to analyze the most useful projections.
   - Toggle which Projections are shown

Visible assets
- As a user, I want to control which assets are visible in both charts so that it's easier to analyze the most useful assets.
   - Toggle which Assets are shown

Multiple asset files
- As a user, I want to compare Assets across multiple years so that it's easier to identify anomalies.
   - Sometimes I don't know an Asset's characteristic so I refer to prior years to gain context.
   - It's easier to compare Assets between years when they're on the same graph, 
     e.g. as opposed to consecutive, separate graphs.

TODO's
- What do 50 assets per year look like?
  - easy way to generate datasets? - DONE
  - copy new datasets into cash flow files - DONE
  - copy script into source code - DONE
  - adjust filters + graphs based on quantity of data
    - move filters to collapsible side bar widgets? - DONE
    - search bar to filter visible assets (inside widget)
       - Prolly not needed for projections - only two options anyways
    - Remove borders around everything - use a separator
    - Show only selected/visible assets + Show all assets toggle
- Update README for description, docs, running locally. Clean up docs
- Data transform process
   - Given raw csv file from model run (aka Sheet CSV export) -> (mock) api call for data -> structured data for chart consumption
- new name - project-scry? project-verify, -verifeye
- allow renaming of Projections (show fileName, allow update of project name)

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
      - responsive charts
      - coloring for dynamic datasets
## Tools

- Runtime: Node v20
- Build: Vite
- Language: Typescript
- Frontend: React, Sass, CSS Modules

## Future ideas

- autoprefixer (browser prefixes on styles): https://autoprefixer.github.io/
   - https://stackoverflow.com/questions/71415014/how-to-use-autoprefixer-with-vitejs-and-react
- https://www.chartjs.org/docs/latest/general/colors.html#advanced-color-palettes
   - advanced color paletes for coloring datasets
   - https://github.com/chartjs/awesome?tab=readme-ov-file#plugins