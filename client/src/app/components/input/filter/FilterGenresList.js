import React, { useState } from 'react'

import { useFetch } from '../../../hooks'
import { movieDatabase } from '../../../config'
import FilterResults from './FilterResults'

import styles from './FilterGenresList.module.scss'

const FilterGenresList = ({genres, location}) => {
  const [checkedState, setCheckedState] = useState(new Array(genres.genres.length).fill(null));

  const handleOnChange = (position, ev) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      (index === position && item === null ? ev.target.value : (index === position && typeof item === "string" ? null : item))
    );

    setCheckedState(updatedCheckedState);
  }

  const map = checkedState.filter(check => check !== null).map(check2 => check2).join();

  const API_URL = `${movieDatabase.baseUrl}/3/discover/${(location === 'shows') ? 'tv' : 'movie' }/?api_key=${movieDatabase.apiKey}&language=en-US&page=1&with_genres=${map}`;
  const [data, isLoading, error] = useFetch(API_URL);

  return (
    <>
      <ul className={styles.genres__list}>
        {genres.genres.map((genre, index) => (
          <li className={styles.genres__list__item} key={genre.id}>
            <label className={checkedState[index] !== null ? styles.checked : ''}>
              <input className={`${styles.hide}`} type="checkbox" id={genre.id} value={genre.id} checked={checkedState[index]} onChange={(ev) => handleOnChange(index, ev)} />
              {genre.name}
            </label>
          </li>
        ))}
      </ul>

      <FilterResults error={error} isLoading={isLoading} results={data} />
    </>
  )
}

export default FilterGenresList
