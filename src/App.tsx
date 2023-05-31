import React, { useEffect } from 'react';
import styles from './styles/App.module.scss'
import Author from './components/Author';
import GameWrapper from './components/GameWrapper';
import Display from './components/Display';
import Operate from './components/Operate';

import { TITLE } from './core/constant'

function App() {

  useEffect(() => {
    document.title = TITLE
  }, [])
  
  return (
    // <div className={styles.container}>
    //   <GameWrapper display={
    //     <Display />
    //   }>
    //     <Operate />
    //   </GameWrapper>
    //   <Author />
    // </div>

    <Operate />
  );
}

export default App;
