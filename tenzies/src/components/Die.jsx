import React from 'react'
import styles from './die.module.css'

const Die = (props) => {
    const number = Math.floor(Math.random() * 6) + 1
  return (
    <>
        <div>
            {number}
        </div>
    </>
  )
}

export default Die