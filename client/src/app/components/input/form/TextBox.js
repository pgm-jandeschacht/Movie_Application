import React from 'react'

import styles from './TextBox.module.scss'

const Checkbox = ({label}) => {
  return (
    <label className={[styles.textbox]}>
      <input type="text" />
      {label}
    </label>
  )
}

export default Checkbox
