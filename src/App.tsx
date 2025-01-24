/* eslint-disable @typescript-eslint/ban-ts-comment */

import {
  Chart as ChartJS,
  registerables
} from 'chart.js'

import MyChart from './components/MyChart';

// @ts-ignore
import cashFlowData from './assets/cash-flow-testing.csv';
// @ts-ignore
import cashFlowDataYear0 from './assets/cash-flow-testing-year-0.csv';
// import styles from './App.module.scss';
import { Asset, Projection } from './components/common/types';

ChartJS.register(...registerables);

function App() {
  // TODO Show/hide projections + file name
  // TODO allow renaming  of projection name
  // TODO Tidy up chart margins
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
      <MyChart projections={datasets}/>
    </div>
    </>
  )
}

export default App
