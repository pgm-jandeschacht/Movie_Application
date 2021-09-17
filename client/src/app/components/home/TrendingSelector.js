import React, {useState, useEffect} from 'react'

import styles from './TrendingSelector.module.scss'

const TrendingSelector = ({onCallChange}) => {
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
      <h2 className={styles.trending__title}>Trending</h2>  
      <ul className={styles.trending__selectors}>
        <li className={`${styles.trending__selectors__item} ${(isFiltered ===  'Movies')? (styles.active) : ''}`} onClick={handleClick} >Movies</li>
        <li className={`${styles.trending__selectors__item} ${(isFiltered ===  'Shows')? (styles.active) : ''}`} onClick={handleClick} >Shows</li>
      </ul>
    </>
  )
}

export default TrendingSelector