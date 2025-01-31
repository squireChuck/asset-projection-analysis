import { useState } from 'react';

import ProjectionChart from '../common/ProjectionChart';
import { Projection } from '../common/types';
import styles from './index.module.scss';
// Add input box
// Add styles
// Add behavior
function ChartDashboard(props: { projections: Projection[] } ) {
  const { projections } = props;

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
                Clear
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
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={styles["dashboard-main"]}>
        <ProjectionChart
          projections={filteredCashFlowData}
          assetAttribute="Market Value"
        />
        <ProjectionChart
          projections={filteredCashFlowData}
          assetAttribute="Net yield"
        />
      </div>
    </div>
  );
}

export default ChartDashboard;