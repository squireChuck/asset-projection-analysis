import cashFlowData from '../../assets/cash-flow-testing.csv';
import { Line } from '../common/Chart';
// import styles from './index.module.scss';


// https://www.chartjs.org/docs/latest/samples/line/line.html
function Chart() {
  console.log('', cashFlowData);
  const labels = Object.keys(cashFlowData[0]).filter(key => !['Asset', 'Attribute'].includes(key)).sort((a, b) => {
    return Number.parseInt(a) - Number.parseInt(b);
  });
  const datasets = cashFlowData.reduce((accum, asset) => {
    return asset.Attribute === 'Market Value'
      ? 
        [
          ...accum,
          {
            label: `Asset ${asset.Asset}`,
            data: labels.map(label => asset[label]),
            borderWidth: 1
          }
        ]
      : accum;
  }, []);
  const data = {
    labels,
    datasets
  };
  const options = {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  };

  return (
    <>
      <Line data={data} options={options} />
    </>
  );
}

export default Chart;