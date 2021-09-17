import React, { useState } from 'react'

import { useFetch } from '../../hooks'
import { movieDatabase } from '../../config'
import TrendingSelector from './TrendingSelector'
import TrendingItems from './TrendingItems'

const Trending = () => {
  const [isChanged, setIsChanged] = useState('movie');

  const call = isChanged.toLowerCase();
  const checked = (call === 'movies' ? 'movie' : call === 'shows' ? 'tv' : call);

  const API_URL = `${movieDatabase.baseUrl}/3/trending/${checked}/day?api_key=${movieDatabase.apiKey}&language=en-US&page=1`;
  const [data, isLoading, error] = useFetch(API_URL);

  const handleCallChange = (isFiltered) => {
    setIsChanged(isFiltered)
  }

  return (
    <section>
      <TrendingSelector onCallChange={handleCallChange}/>

      <TrendingItems error={error} isLoading={isLoading} results={data} checked={checked} />
    </section>
  )
}

export default Trending
