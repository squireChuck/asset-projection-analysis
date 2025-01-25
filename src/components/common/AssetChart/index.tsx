
import { Line } from '../Chart';
import { Asset, Projection } from '../../common/types';
// import styles from './index.module.scss';

// TODO chartjs type?
interface Dataset {
  label: string;
  data: string[];
  borderWidth: number;
}

interface Props {
  assetAttribute: 'Market Value' | 'Net yield';
  projections: Projection[];
}

// https://www.chartjs.org/docs/latest/samples/line/line.html
function Chart(props: Props) {
  const { projections, assetAttribute } = props;

  const projectionsWithData = projections?.filter(projection => projection.assets?.length > 0) ?? [];
  if (projectionsWithData.length === 0) {
    return (
      <div>
        <em>Not enough data for the {assetAttribute} chart...</em>
      </div>
    );
  }
  const labels = Object.keys(projections[0].assets[0]).filter(key => !['Asset', 'Attribute'].includes(key)).sort((a, b) => {
    return Number.parseInt(a) - Number.parseInt(b);
  });
  // const datasetsOld = assets.reduce((accum: Projection[], asset: Asset) => {
  //   return asset.Attribute === assetAttribute
  //     ? 
  //       [
  //         ...accum,
  //         {
  //           label: `Asset ${asset.Asset}`,
  //           data: labels.map(label => asset[label]),
  //           borderWidth: 1
  //         }
  //       ]
  //     : accum;
  // }, []);
  const datasets: Dataset[] = projectionsWithData.reduce((accum: Dataset[], projection: Projection) => {
    const next: Dataset[] = projection.assets.reduce((accum: Dataset[], asset: Asset) => {
        console.log(`Projection ${projection.name}, Asset ${asset.Asset}, ${asset.Attribute}`)
        return asset.Attribute === assetAttribute
          ? 
            [
              ...accum,
              {
                label: `Projection ${projection.name}, Asset ${asset.Asset}`,
                data: labels.map(label => asset[label]),
                borderWidth: 1
              }
            ]
          : accum;
        }, []);
      return [ ...accum, ...next];
      }, []);

  const data = {
    labels,
    datasets
  };
  const options = {
    scales: {
      y: {
        beginAtZero: true
      },
    },
    plugins: {
      title: {
          display: true,
          text: assetAttribute,
      }
    }
  };

  return (
    <>
    {/* TODO use built in chart title? */}
      {/* <h2>{assetAttribute}</h2> */}
      <Line data={data} options={options} />
    </>
  );
}

export default Chart;