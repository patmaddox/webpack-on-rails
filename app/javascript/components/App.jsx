import React from 'react';
import styles from './App.scss';

console.log(styles);

const App = () => (
  <div className={styles.app}>
    <h2>Hello, Hot-Module Reloading</h2>
  </div>
);

export default App;
