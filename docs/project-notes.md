# Project notes

## Project tech

- Runtime: Node v20
- Build: Vite
- Language: Typescript
- Frontend: React, Sass, CSS Modules

## Technical goals

- React + TS practice
- CSS => explore modern techniques/framework
   - Sass + CSS Modules - https://vite.dev/guide/features#css-pre-processors
      - Decided to use CSS Modules after consulting a colleague on current CSS tech, who advised that
        CSS Modules would be pretty simple to include while gaining the benefits of some style scoping.
- Vite
   - Many devs are excited about the developer experience using this - seems worth checking out.
   - public vs assets
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
   - A familiar tool that can facilitate visualizing data and investigating the user experience around rendering large datasets.
      - responsive charts
      - coloring for dynamic datasets
   - https://medium.com/@pdx.lucasm/canvas-with-react-js-32e133c05258
   - https://www.chartjs.org/docs/latest/samples/line/line.html
   - pulled in files from https://github.com/reactchartjs/react-chartjs-2/tree/master

## Future ideas

- Data transform process
   - Given raw csv file from model run (aka Sheet CSV export) -> (mock) api call for data -> structured data for chart consumption
   - Asset: { id: string, name: string, attributes: { attr1: AttributeData, attr2: AttributeData ...} }
   - AttributeData: { attributeKey: string (Market Value, Net yield), data: Array<{ timepoint: string/number, value: string/number }> }
- Anything marked TODO in code
- autoprefixer (browser prefixes on styles): https://autoprefixer.github.io/
   - https://stackoverflow.com/questions/71415014/how-to-use-autoprefixer-with-vitejs-and-react
- https://www.chartjs.org/docs/latest/general/colors.html#advanced-color-palettes
   - advanced color paletes for coloring datasets
   - https://github.com/chartjs/awesome?tab=readme-ov-file#plugins

Open questions
- Project currently assumes all data points are nonzero, and datasets all have the same number of
  data points. What kind of data validation should exist, e.g. at chart creation time vs data ahead of time?
   - examples: what if a dataset has missing quarters compared to others? What if a file has fewer assets/fewer attributes?