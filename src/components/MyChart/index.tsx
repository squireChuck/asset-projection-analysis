import cashFlowData from '../../assets/cash-flow-testing.csv';
import { Bar } from '../common/Chart';
// import styles from './index.module.scss';


// https://www.chartjs.org/docs/latest/samples/line/line.html

function Chart() {
  console.log('', cashFlowData);
  const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      borderWidth: 1
    }]
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
      <Bar data={data} options={options} />
    </>
  );
}

export default Chart;