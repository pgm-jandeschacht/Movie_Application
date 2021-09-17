import React, {useState} from 'react'
import { FiChevronUp } from 'react-icons/fi';

import FilterGenres from './FilterGenres'

import styles from './Filter.module.scss'

const Filter = () => {
  const [isClicked, setIsClicked] = useState(true)

  const handleClick = () => {
    setIsClicked(!isClicked)
  }

  // console.log(isClicked)

  return (
    <section className={`${styles.filter} ${isClicked ? styles.hide : ''}`}>
      <h3 onClick={handleClick} >Filter <FiChevronUp/></h3>
      <FilterGenres isClicked={isClicked} />
    </section>
  )
}

export default Filter
