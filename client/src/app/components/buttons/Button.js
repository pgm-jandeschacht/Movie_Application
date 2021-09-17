import React from 'react'

import styles from './Button.module.scss'

const Button = ({type='primary', children}) => {
  return (
    <button className={styles[type]} >{ children }</button>
  )
}

export default Button
