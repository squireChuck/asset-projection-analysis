
import { Line } from '../Chart';
// import styles from './index.module.scss';

interface Asset {
  Asset: string;
  Attribute: string;
  [key: string]: string;
}

// TODO chartjs type?
interface Dataset {
  label: string;
  data: string[];
  borderWidth: number;
}

interface Props {
  assetAttribute: 'Market Value' | 'Net yield';
  assets: Asset[];
}

// https://www.chartjs.org/docs/latest/samples/line/line.html
function Chart(props: Props) {
  const { assets, assetAttribute } = props;

  const labels = Object.keys(assets[0]).filter(key => !['Asset', 'Attribute'].includes(key)).sort((a, b) => {
    return Number.parseInt(a) - Number.parseInt(b);
  });
  const datasets = assets.reduce((accum: Dataset[], asset: Asset) => {
    return asset.Attribute === assetAttribute
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