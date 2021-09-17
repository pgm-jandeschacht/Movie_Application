import React, {useState, useEffect} from 'react'

import styles from './PopularSelector.module.scss'

const PopularSelector = ({onCallChange}) => {
  const [isFiltered, setIsFiltered] = useState('Movies');
  const [isActive, setIsActive] = useState('active');

  const handleClick = (ev) => {
    setIsFiltered(ev.target.innerHTML);
    if (isFiltered === ev.target.innerHTML) {
      setIsActive(!isActive)
    }
  }

  useEffect(() => {
    onCallChange(isFiltered);
  })
  return (
    <>
      <h2 className={styles.popular__title}>Popular</h2>  
      <ul className={styles.popular__selectors}>
        <li className={`${styles.popular__selectors__item} ${(isFiltered ===  'Movies')? (styles.active) : ''}`} onClick={handleClick} >Movies</li>
        <li className={`${styles.popular__selectors__item} ${(isFiltered ===  'Shows')? (styles.active) : ''}`} onClick={handleClick} >Shows</li>
      </ul>
    </>
  )
}

export default PopularSelector