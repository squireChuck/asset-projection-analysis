import { useState } from 'react';

import ProjectionChart from '../common/ProjectionChart';
import { Asset, Projection } from '../common/types';
import styles from './index.module.scss';

const chartDisplayType = {
  modelFiles: "model-files",
  differenceToPrior: "difference-to-prior",
}

function ChartDashboard(props: { projections: Projection[] } ) {
  const { projections } = props;

  const [selectedChartDisplayType, setSelectedChartDisplayType] = useState(chartDisplayType.modelFiles);
  const [showLegend, setShowLegend] = useState(false);
  const [searchAssetCheckboxString, setSearchAssetCheckboxString] = useState("");
  const [selectedProjectionIds, setSelectedProjectionIds] = useState<string[]>(projections.map(p => p.id));
  const allAssetKeys: string[] = projections.reduce((accum, projection) => {
    return [
      ...accum,
      ...projection.assets.map(asset => asset.Asset)
    ];
  }, [] as string[]);

  const allAssetIds = Array.from(new Set((allAssetKeys)));
  const [selectedAssetIds, setSelectedAssetIds] = useState(allAssetIds);
  const filteredCashFlowData: Projection[] = projections.reduce((accum, projection) => {
    if(!selectedProjectionIds.includes(projection.id)) {
      return accum;
    }
    const next: Projection = {
      ...projection,
      assets: projection.assets.filter(row => selectedAssetIds.includes(row.Asset))
    }
    return [
      ...accum,
      next
    ];
  }, [] as Projection[]);

  return (
    <div className={styles["dashboard"]}>
      <div className={styles["dashboard-sidebar"]}>
        <div className={styles["visible-charts"]}>
          <h2 className={styles["visible-charts-heading"]}>Charts</h2>
          <label className={styles["visible-charts-type"]} htmlFor="chart-type">Choose display:</label>
          <select
            className={styles["visible-charts-type"]}
            name="chart-type"
            value={selectedChartDisplayType}
            onChange={(e) => setSelectedChartDisplayType(e.target.value)}
          >
            <option value={chartDisplayType.modelFiles}>Model files</option>
            <option value={chartDisplayType.differenceToPrior}>Difference to prior</option>
          </select>
        </div>
        { selectedChartDisplayType === chartDisplayType.modelFiles && (
          <div className={styles["visible-projections"]}>
            <h2 className={styles["visible-projections-heading"]}>Projections</h2>
            <ul className={styles["visible-projections-inputs"]}>
              {projections.map(projection => (
                <li
                  key={`visible-projections-checkbox-${projection.name}`}
                  className={styles["visible-projections-input"]}
                >
                  <input
                    className={styles["visible-projections-input-checkbox"]}
                    type="checkbox"
                    name={projection.name}
                    checked={selectedProjectionIds.includes(projection.id)}
                    onChange={() => {
                      const nextSelectedIds = selectedProjectionIds.includes(projection.id)
                        ? selectedProjectionIds.filter(id => id !== projection.id)
                        : [...selectedProjectionIds, projection.id];
                      setSelectedProjectionIds(nextSelectedIds);
                    }}
                  />
                  <label
                    className={styles["visible-projections-label"]}
                    htmlFor={projection.name}
                  >
                    {projection.name}
                  </label>
                </li>
              ))}
            </ul>
          </div>
        )}
        <div className={styles["visible-assets"]}>
          <h2 className={styles["visible-assets-heading"]}>Assets</h2>
          <div className={styles["visible-assets-bulk-actions"]}>
            <button
              className={styles["visible-assets-bulk-actions-button"]}
              onClick={() => setSelectedAssetIds(allAssetIds)}>
                Select all
            </button>
            <span>-</span>
            <button
              className={styles["visible-assets-bulk-actions-button"]}
              onClick={() => setSelectedAssetIds([])}>
                Clear all
            </button>
          </div>
          <input
            type="text"
            placeholder="Filter"
            value={searchAssetCheckboxString}
            onChange={(e) => setSearchAssetCheckboxString(e.target.value)}
          />
          <ul className={styles["visible-assets-inputs"]}>
            {allAssetIds.filter(assetId => assetId.includes(searchAssetCheckboxString)).map(assetId => (
              <li key={`visible-asset-checkbox-${assetId}`} className={styles["visible-assets-input"]}>
                <input
                  className={styles["visible-assets-input-checkbox"]}
                  type="checkbox"
                  name={assetId}
                  checked={selectedAssetIds.includes(assetId)}
                  onChange={() => {
                    const nextSelectedAssetIds = selectedAssetIds.includes(assetId)
                      ? selectedAssetIds.filter(id => id !== assetId)
                      : [...selectedAssetIds, assetId];
                    setSelectedAssetIds(nextSelectedAssetIds);
                  }}
                  />
                <label className={styles["visible-assets-label"]}>
                  {assetId}
                </label>
                {
                  searchAssetCheckboxString != null
                  && searchAssetCheckboxString.trim().length > 0
                  && !(selectedAssetIds.length === 1 && selectedAssetIds.includes(assetId))
                  && (
                    <button
                      className={styles["visible-assets-only-select"]}
                      onClick={() => setSelectedAssetIds([assetId])}
                    >
                      select only
                    </button>
                  )
                }
                {
                  searchAssetCheckboxString != null
                  && searchAssetCheckboxString.trim().length > 0
                  && (selectedAssetIds.length === 1 && selectedAssetIds.includes(assetId))
                  && (
                    <button
                      className={styles["visible-assets-only-select"]}
                      onClick={() => setSelectedAssetIds(allAssetIds)}
                    >
                      select all
                    </button>
                  )
                }
              </li>
            ))}
          </ul>
        </div>
        <div className={styles["visible-projections"]}>
          <h2 className={styles["visible-projections-heading"]}>Chart settings</h2>
          <ul className={styles["visible-projections-inputs"]}>
            <li className={styles["visible-projections-input"]} >
              <input
                className={styles["visible-projections-input-checkbox"]}
                type="checkbox"
                name="visible-projections-input-toggle-legend"
                checked={showLegend}
                onChange={() => setShowLegend(!showLegend)}
              />
              <label
                className={styles["visible-projections-label"]}
                htmlFor="visible-projections-input-toggle-legend"
              >
                Show legend
              </label>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles["dashboard-main"]}>
      { selectedChartDisplayType === chartDisplayType.modelFiles && (
        <>
          <ProjectionChart
            projections={filteredCashFlowData}
            assetAttribute="Market Value"
            showLegend={showLegend}
          />
          <ProjectionChart
            projections={filteredCashFlowData}
            assetAttribute="Net yield"
            showLegend={showLegend}
          />
        </>
      )}
      { selectedChartDisplayType === chartDisplayType.differenceToPrior && (
        <>
          <ProjectionChart
            projections={createChangeProjection(filteredCashFlowData, 'Market Value', 'Percent change in Market Value')}
            assetAttribute="Percent change in Market Value"
            showLegend={showLegend}
          />
          <ProjectionChart
            projections={createChangeProjection(filteredCashFlowData, 'Net yield', 'Change in Net Yield')}
            assetAttribute="Change in Net Yield"
            showLegend={showLegend}
          />
        </>
      )}
      </div>
    </div>
  );
}

const computeChangeAssets = (
  currentYearProjection: Projection,
  lastYearProjection: Projection,
  baseAttribute: string,
  newAttributeName: string,
): Asset[] => {
  return currentYearProjection.assets.reduce((accum, currentYearAsset) => {
    if (currentYearAsset.Attribute !== baseAttribute) {
      return accum;
    }

    const lastYearAsset = lastYearProjection.assets.find(
      lastYearAsset => lastYearAsset.Asset === currentYearAsset.Asset && lastYearAsset.Attribute === baseAttribute
    );

    let nextAsset: Asset;
    // if there's no data from last year, treat as if last year was all zero's
    // TODO what if there was data last year but not this year?
    if (lastYearAsset == null) {
      nextAsset = { ...currentYearAsset, Attribute: newAttributeName };
    } else {
      nextAsset = Object.keys(currentYearAsset)
        .filter(datapointKey => !['Asset', 'Attribute'].includes(datapointKey))
        .reduce((accum, datapointKey) => {
          const currentYearNumber = parseFloat(currentYearAsset[datapointKey]);
          const lastYearNumber = parseFloat(lastYearAsset[datapointKey]);
          if (parseInt(datapointKey) === 10 && baseAttribute === 'Net yield') {
            console.log(``, {
              datapointKey,
              currentYearNumber,
              lastYearNumber
            })
          }
          const computedChange = baseAttribute === 'Market Value'
            ? (currentYearNumber - lastYearNumber) / currentYearNumber
            : (currentYearNumber - lastYearNumber);
          return {
            ...accum,
            [datapointKey]: computedChange
          };
        }, { Asset: currentYearAsset.Asset, Attribute: newAttributeName })
    }

    if (baseAttribute === 'Net yield') {
      console.log(`nextAsset...`, nextAsset)
    }
    
    return [...accum, nextAsset];
  }, [] as Asset[])
};

const createChangeProjection = (cashFlowData: Projection[], baseAttribute: string, newAttributeName: string): Projection[] => {
  // TODO how to handle if missing current or last year?
  const currentYear: Projection = cashFlowData.find((dataset: Projection) => dataset.name === 'Current year') as Projection;
  const lastYear: Projection = cashFlowData.find((dataset: Projection) => dataset.name === 'Last year') as Projection;
  const t = computeChangeAssets(currentYear, lastYear, baseAttribute, newAttributeName);
  console.log('', t);
  return [{
    id: `change-${newAttributeName}`,
    name: `Change in ${newAttributeName}`,
    assets: t
  }]
}




export default ChartDashboard;