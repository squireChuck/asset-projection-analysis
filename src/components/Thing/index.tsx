import { useState } from 'react'
import styles from './index.module.scss';

function Thing() {
  const [count, setCount] = useState(0)
  return (
    <>
      <div className={[count % 2 === 0 ? styles.red : styles.blue, styles.flex, styles.size].join(' ') }>
        <div>Count is {count > 4 ? 'too high' : count}</div>
        <button onClick={() => setCount(count + 1)}>Inc</button>
      </div>
    </>
  )
}

export default Thing
