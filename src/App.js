import React from 'react'
import { render } from 'react-dom'
import styles from './styles.css'

const App = () => {
  return <div className={styles.intro}>Hello world</div>
}

render(<App />, document.getElementById('app'))
