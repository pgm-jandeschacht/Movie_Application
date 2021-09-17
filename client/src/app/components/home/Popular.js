import React, { useState } from 'react'

import { useFetch } from '../../hooks'
import { movieDatabase } from '../../config'
import PopularSelector from './PopularSelector'
import PopularItems from './PopularItems'

import styles from './Popular.module.scss'

const Popular = () => {
  const [isChanged, setIsChanged] = useState('movie');

  const call = isChanged.toLowerCase();
  const checked = (call === 'movies' ? 'movie' : call === 'shows' ? 'tv' : call);

  const API_URL = `${movieDatabase.baseUrl}/3/${checked}/popular?api_key=${movieDatabase.apiKey}&language=en-US&page=1`;
  const [data, isLoading, error] = useFetch(API_URL);

  const handleCallChange = (isFiltered) => {
    setIsChanged(isFiltered)
  }

  return (
    <section className={styles.popular}>
      <PopularSelector onCallChange={handleCallChange}/>

      <PopularItems error={error} isLoading={isLoading} results={data} checked={checked} />
    </section>
  )
}

export default Popular
