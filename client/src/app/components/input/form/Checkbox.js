import React from 'react'

import styles from './Checkbox.module.scss'

const Checkbox = ({label}) => {
  return (
    <label className={[styles.checkbox]}>
      <input type="checkbox" />
      {label}
    </label>
  )
}

export default Checkbox
