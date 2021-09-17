import React, {useState} from 'react'

import styles from './SearchBar.module.scss'

const SearchBar = ({ click, getQuery }) => {
  const [text, setText] = useState('');

  const onChange = (q) => {
    setText(q);
    getQuery(q);
  }

  return (
    <form className={`${styles.searchbar} ${ click ? (styles.clicked) : '' }`}>
      <input type="text" placeholder='Search database' value={text} onChange={(ev) => onChange(ev.target.value)} />
    </form>
  )
}

export default SearchBar
