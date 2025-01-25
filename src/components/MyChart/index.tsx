import { useState } from 'react';

import AssetChart from '../common/AssetChart';
import { Projection } from '../common/types';
import styles from './index.module.scss';

function MyChart(props: { projections: Projection[] } ) {
  const { projections } = props;
  console.log('', projections[0]);
  console.log('', projections[1]);
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
    <>
      <div className={styles["visible-filters"]}>
        <div className={styles["visible-projections"]}>
          <h2 className={styles["visible-projections-heading"]}>Visible projections</h2>
          <div className={styles["visible-projections-inputs"]}>
            {projections.map(projection => (
              <div className={styles["visible-projections-input"]}>
                <label>
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
              </div>
            ))}
          </div>
        </div>
        <div className={styles["visible-assets"]}>
          <h2 className={styles["visible-assets-heading"]}>Visible assets</h2>
          <div className={styles["visible-assets-inputs"]}>
            {allAssetIds.map(assetId => (
              <div className={styles["visible-assets-input"]}>
                <label>
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
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* TODO rename to projectionschart?? */}
      <AssetChart
        projections={filteredCashFlowData}
        assetAttribute="Market Value"
      />
      <AssetChart
        projections={filteredCashFlowData}
        assetAttribute="Net yield"
      />
    </>
  );
}

export default MyChart;