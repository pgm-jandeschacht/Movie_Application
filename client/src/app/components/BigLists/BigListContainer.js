import React, { useState } from 'react'
import Pagination from '@material-ui/lab/Pagination';

import { movieDatabase } from '../../config'
import { useFetch } from '../../hooks'
import BigListList from './BigListList'

const BigListContainer = ({ filter, location }) => { 
  const [page, isPage] = useState(1);

  const handleChange = (event, value) => {
    isPage(value)
  }
  
  const call = filter.toLowerCase();
  const checked = (call === 'top rated' ? 'top_rated' : call === 'on the air' ? 'on_the_air' : call);
  
  const API_URL = `${movieDatabase.baseUrl}/3/${(location === 'shows') ? 'tv' : 'movie' }/${checked}?api_key=${movieDatabase.apiKey}&language=en-US&page=${page}`;
  const [data, isLoading, error] = useFetch(API_URL);

  let allPages = (error ? 0 : isLoading || !data ? 0 : data.total_pages);

  return (
    <div>
      <BigListList location={location} isLoading={isLoading} error={error} movies={data} />

      <Pagination onChange={handleChange} count={allPages} shape="rounded" color="secondary"/>
    </div>
    
  )
}

export default BigListContainer