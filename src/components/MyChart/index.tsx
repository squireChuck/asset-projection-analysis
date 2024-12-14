import { useState } from 'react';

import cashFlowData from '../../assets/cash-flow-testing.csv';
import AssetChart from '../common/AssetChart';
import { Asset } from '../common/types';
import styles from './index.module.scss';


function Chart() {
  console.log('', cashFlowData);
  const initialSelectedAssetIds = (cashFlowData as Asset[])
    .reduce((accum, row) => {
      if (accum[row.Asset] == null) {
        return { ...accum, [row.Asset]: true };
      }
      return accum;
    }, {} as { [key: string]: boolean });
  const [selectedAssetIds, setSelectedAssetIds] = useState(initialSelectedAssetIds);
  console.log("sss", selectedAssetIds);
  return (
    <>
      <div className={styles["visible-assets"]}>
        <h2 className={styles["visible-assets-heading"]}>Visible assets</h2>
        <div className={styles["visible-assets-inputs"]}>
          {Object.keys(selectedAssetIds).map(assetId => (
            <div className={styles["visible-assets-input"]}>
              <label>
                <input
                  className={styles["visible-assets-input-checkbox"]}
                  type="checkbox"
                  checked={selectedAssetIds[assetId]}
                  onChange={() => setSelectedAssetIds({
                    ...selectedAssetIds,
                    [assetId]: !selectedAssetIds[assetId]
                  })}
                  />
                {assetId}
              </label>
            </div>
          ))}
        </div>
      </div>
      <AssetChart
        assets={cashFlowData}
        assetAttribute="Market Value"
      />
      <AssetChart
        assets={cashFlowData}
        assetAttribute="Net yield"
      />
    </>
  );
}

export default Chart;