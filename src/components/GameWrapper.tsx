import { FC, ReactElement } from 'react'
import styles from '../styles/GameWrapper.module.scss'
import { TITLE } from '../core/constant'

export type PropsType = {
  display: ReactElement;
  children: ReactElement;
}

const GameWrapper: FC<PropsType> = (props) => {
  return <div className={styles.container}>
    <div className={styles.header}>
      <div className={styles.left}>1</div>
      <div className={styles.display}>
        <div className={styles.title}>
          {TITLE}
        </div>
        <div className={styles.screen}>
          {props.display}
        </div>
      </div>
      <div className={styles.right}>2</div>
    </div>
    {props.children}
  </div>
}

export default GameWrapper