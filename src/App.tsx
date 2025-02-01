/* eslint-disable @typescript-eslint/ban-ts-comment */

import {
  Chart as ChartJS,
  registerables
} from 'chart.js'

import ChartDashboard from './components/ChartDashboard';

// @ts-ignore
import cashFlowData from './assets/cash-flow-testing.csv';
// @ts-ignore
import cashFlowDataYear0 from './assets/cash-flow-testing-year-0.csv';
// // @ts-ignore
// import cashFlowData from './assets/cash-flow-testing-large.csv';
// // @ts-ignore
// import cashFlowDataYear0 from './assets/cash-flow-testing-year-0-large.csv';
// // @ts-ignore
// import cashFlowData from './assets/cash-flow-testing-test-diff-to-prior-year.csv';
// // @ts-ignore
// import cashFlowDataYear0 from './assets/cash-flow-testing-test-diff-to-prior-year-year-0.csv';

// import styles from './App.module.scss';
import { Asset, Projection } from './components/common/types';

ChartJS.register(...registerables);

function App() {
  const datasets: Projection[] = [
    {
      id: 'currentYearDataset',
      fileName: 'cash-flow-testing.csv',
      name: 'Current year',
      assets: cashFlowData as Asset[]
    },
    {
      id: 'year0Dataset',
      fileName: 'cash-flow-testing-year-0.csv',
      name: 'Last year',
      assets: cashFlowDataYear0 as Asset[]
    }
  ];
  return (
    <>
    <div className="">
      <ChartDashboard projections={datasets}/>
    </div>
    </>
  )
}

export default App
