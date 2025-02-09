# Asset Projection Analysis System

## Background

A financial company uses Modeling Software to project the performance
of asset portfolios under provided hypothetical scenarios (varying
market conditions/assumptions/tail-risk analysis).
Downstream teams use these projections to make investment/reserving
decisions with real capital, which can lead to lost revenue and
reputational damage if done improperly.

Since human input can lead to erroneous projections, and thus, poor financial decisions,
the company needs a system that helps actuaries verify the projections are sound.


### Modeling software

(Upstream system)

Given:
- Input file - levers that affect the model's projections
- time 0 and other assumptions - typically supplied by other actuaries

Output
- Asset portfolio projection file - csv with header row
   - Asset - id of an asset portfolio, e.g. "10 year Bond rated A"
      - Asset portfolio - should exhibit explainable/characteristic market behavior over time
   - Attribute - attribute recorded in the csv row
   - Time `0 .. n` - attribute value at Time `n`, given in _years_

### Glossary

**Projection**, aka **model file**

**Asset**

**Asset Attribute**

**Change to prior**

## Functional requirements

The high-level functional requirements of the Asset Project Analysis System are as follows.

Graph data from model files, aka "Model files"
- As a user, I want to graph data directly from model files so that I can visually
  inspect it for anomalies.
- Graph multiple asset files, aka Visible Projections
   - As a user, I want to compare Assets across multiple years so that it's easier to identify anomalies.
      - Sometimes I don't know an Asset's characteristic so I refer to prior years to gain context.
      - It's easier to compare Assets between years when they're on the same graph, 
      e.g. as opposed to consecutive, separate graphs.
   - As a user, I want to control which projections are visible so that it's easier to analyze the most useful projections.
      - Feature: toggle which Projections are shown in the "Projections" section of the sidebar.

Graph data from model files compared to other files, aka "change to prior"
- As a user, I want to graph the difference between datasets so that I can easily
  identify anomalies.
   - example: if an asset should show ~0% change year-over-year, any deviations
     from 0 will be easy to identify for further investigation.

Display different chart types
- As a user, I want to switch between graphing model files and the "change to prior" so that I can easily
  use the chart best suited for understanding assets and if they've changed in an explainable way.
   - Feature: use the "Choose display" dropdown in the Charts section of the sidebar to graph
     "Model files" or "Change to prior"

Visible assets
- As a user, I want to control which assets are visible so that it's easier to analyze the most useful assets.
   - Feature: toggle which Assets are shown in the Assets section of the sidebar.
   - Feature: in the Assets section of the sidebar, click on the bulk actions (select all/clear all) to show/hide
     all assets on the charts.
   - Feature: in the Assets section of the sidebar, type into the filter text box to easily find assets where
     you want to toggle its show/hide state.
   - Feature: in the Assets section of the sidebar, hover over an asset to reveal a "select only" button, which
     updates the charts to graph the single, associated asset.
   - Feature: when the chart legends are enabled, click on an asset in the chart legend to toggle
     showing/hiding individual asset datasets

Customizable chart settings
- As a user, I want to toggle on/off the chart legends so that I can disable them when
  they get in the way (e.g. many datasets) and enable them when they're most helpful (e.g. few
  datasets).
   - Feature: toggle if legends are shown/hidden in the "Chart settings" section of the sidebar.
      - Default to hide - when there are many datasets, the legends take up significant visual space in the chart layout. When there
        are fewer datasets, it's easy enough to hover over a dataset for more information.

## Non-functional requirements

The pertinent non-functional requirements are as follows.

### Scalability
- The system must be able to render and permit reasonably smooth user interaction for a
  minimum of two model files, where
   - each file may contain up to 50 assets
   - each asset may contain up to 4 asset attributes
   - each asset attribute may contain up to 41 data points (time 0 + 40 quarters)
