import { useState } from 'react';

import cashFlowData from '../../assets/cash-flow-testing.csv';
import AssetChart from '../common/AssetChart';
import { Asset } from '../common/types';
import styles from './index.module.scss';


function Chart() {
  console.log('', cashFlowData);
  const typedData: Asset[] = cashFlowData as Asset[];
  const allAssetIds = Array.from(new Set((typedData).map(row => row.Asset)));
  const [selectedAssetIds, setSelectedAssetIds] = useState(allAssetIds);
  console.log('', selectedAssetIds);
  const filteredCashFlowData = typedData.filter(row => selectedAssetIds.includes(row.Asset));
  return (
    <>
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
      <AssetChart
        assets={filteredCashFlowData}
        assetAttribute="Market Value"
      />
      <AssetChart
        assets={filteredCashFlowData}
        assetAttribute="Net yield"
      />
    </>
  );
}

export default Chart;