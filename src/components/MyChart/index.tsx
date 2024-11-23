import cashFlowData from '../../assets/cash-flow-testing.csv';
import AssetChart from '../common/AssetChart';
// import styles from './index.module.scss';


function Chart() {
  console.log('', cashFlowData);

  return (
    <>
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