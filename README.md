# Projection Selection


Projection Selection aids users assessing the correctness of model projections by:
- graphing asset files produced by modeling software
- providing tools to identify potential outliers/issues in a projection, e.g. via filters or computing results against another file

The example data files in `src/assets` include:
- simple datasets to facilitate development
   - cash-flow-testing.csv - current year's dataset
   - cash-flow-testing-year-0.csv - last year's dataset
- large datasets for checking the user experience at this scale of data
   - cash-flow-testing-large.csv - current year's dataset
   - cash-flow-testing-year-0-large.csv - last year's dataset
- contrived datasets to test the "compare to prior" feature
   - cash-flow-testing-test-diff-to-prior-year.csv - current year's dataset
   - cash-flow-testing-test-diff-to-prior-year-0.csv - last year's dataset

See the `docs` folder for more info.

## Local development

Tools:
- node v20
- (optional) nvm

## Run locally

In your terminal:
1. (optional) Set the version of node: `nvm use`
1. Run the project: `npm run dev`
1. Visit the url printed in the terminal.
   - Show help in the terminal: press `h + enter`
   - Open browser to the dev url from the terminal: press `o + enter`
