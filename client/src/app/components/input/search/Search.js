import React from 'react'
import {useState} from 'react'
import { FiSearch } from 'react-icons/fi';

import SearchBar from './SearchBar'
import SearchResults from './SearchResults'

import styles from './Search.module.scss';

const Search = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [query, setQuery] = useState('');
  
  const handleClick = () => {
    setIsClicked(!isClicked);
  }

  const handleClosing = (isClosed) => {
    setIsClicked(isClosed) 
  }
  
  return (
    <div>
      <div className={styles.search}>
        <div>
          <button className={`${styles.search__btn} ${ isClicked ? (styles.clicked) : '' } }`} onClick={handleClick}>
              <FiSearch />
          </button>

          <SearchBar getQuery={(q) => setQuery(q)} click={isClicked} />
        </div>
      </div>

      {(query !== '' && isClicked) ? <SearchResults query={query} onClosed={handleClosing} /> : ''}
    </div>
  )
}

export default Search
