# Asset Projection Analysis System

## Background

A financial company uses Modeling Software to project the performance
of asset portfolios under provided hypothetical scenarios (varying
market conditions/assumptions/tail-risk analysis).
Downstream teams use these projections to make investment/reserving
decisions with "real capital", which can lead to lost revenue and
reputational damage if done improperly.
Since human input can lead to erroneous projections, and thus, poor financial decisions,
the company needs a system that helps actuaries verify the projections are sound.


### Modeling software

Given:
- Input file - levers that affect the model's projections
- time 0 and other assumptions - typically supplied by other actuaries

Output
- Asset portfolio projection file - csv with header row
   - Asset - id of an asset portfolio, e.g. "10 year Bond rated A"
      - Asset portfolio - should exhibit explainable/characteristic market behavior over time
   - Attribute - attribute recorded in the csv row
   - Time `0 .. n` - attribute value at Time `n`, given in _years_

## Functional requirements

The high-level functional requirements of the Asset Project Analysis System are as follows.

TODO

## Non-functional requirements

A number of non-functional requirements are out-of-scope for the MVP solution of the Asset Projection Analysis System, including: TODO

The pertinent non-functional requirements are as follows.

TODO