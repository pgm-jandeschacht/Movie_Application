import React, {useState, useEffect} from 'react'

import styles from './BigListSelector.module.scss'

const BigListSelector = ({onCallChange, location}) => {
  const [isFiltered, setIsFiltered] = useState('Popular');
  const [isActive, setIsActive] = useState('active');

  const handleClick = (ev) => {
    setIsFiltered(ev.target.innerHTML);
    if (isFiltered === ev.target.innerHTML) {
      setIsActive(!isActive)
    }
  }

  useEffect(() => {
    onCallChange(isFiltered)
  })

  return (
    <ul className={styles.selectors}>
      <li className={`${styles.selectors__item} ${(isFiltered ===  'Popular')? (styles.active) : ''}`} onClick={handleClick}>Popular</li>
      
      {location === 'movies' ? 
      <li className={`${styles.selectors__item} ${(isFiltered ===  'Upcoming')? (styles.active) : ''}`} onClick={handleClick}>Upcoming</li> :
      <li className={`${styles.selectors__item} ${(isFiltered ===  'On the air')? (styles.active) : ''}`} onClick={handleClick}>On the air</li> }
      
      <li className={`${styles.selectors__item} ${(isFiltered ===  'Top rated')? (styles.active) : ''}`} onClick={handleClick}>Top rated</li>
    </ul>
  )
}

export default BigListSelector
