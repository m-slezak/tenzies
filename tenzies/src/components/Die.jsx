import React from 'react'
import styles from './die.module.css'

const Die = (props) => {
    const number = Math.floor(Math.random() * 6) + 1
  return (
    <>
        <div className={styles.box}>
            <h2 className={styles.number}>{number}</h2>
        </div>
    </>
  )
}

export default Die