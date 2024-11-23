import {
  Chart as ChartJS,
  registerables
} from 'chart.js'

import MyChart from './components/MyChart';
import styles from './App.module.scss';

ChartJS.register(...registerables);

function App() {

  return (
    <>
    <div className="">
      <MyChart />
    </div>
    </>
  )
}

export default App
