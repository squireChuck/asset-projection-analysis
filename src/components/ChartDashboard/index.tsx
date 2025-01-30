import { useState } from 'react';

import ProjectionChart from '../common/ProjectionChart';
import { Projection } from '../common/types';
import styles from './index.module.scss';
// Add input box
// Add styles
// Add behavior
function ChartDashboard(props: { projections: Projection[] } ) {
  const { projections } = props;
  console.log('', projections[0]);
  console.log('', projections[1]);
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
  console.log('', selectedAssetIds);
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
              <li className={styles["visible-projections-input"]}>
                <label className={styles["visible-projections-label"]}>
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
                  {projection.name}
                </label>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles["visible-assets"]}>
          <h2 className={styles["visible-assets-heading"]}>Assets</h2>
          <div>
            <span onClick={() => setSelectedAssetIds(allAssetIds)}>Select all</span>
            <span>------</span>
            <span onClick={() => setSelectedAssetIds([])}>Clear</span>
          </div>
          <input
            type="text"
            className={styles["visible-assets-checkbox-filter"]}
            placeholder="Filter"
            value={searchAssetCheckboxString}
            onChange={(e) => setSearchAssetCheckboxString(e.target.value)}
          />
          <ul className={styles["visible-assets-inputs"]}>
            {allAssetIds.filter(assetId => assetId.includes(searchAssetCheckboxString)).map(assetId => (
              <li className={styles["visible-assets-input"]}>
                <label className={styles["visible-assets-label"]}>
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