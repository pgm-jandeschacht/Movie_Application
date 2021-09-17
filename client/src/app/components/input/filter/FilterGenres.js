import React from 'react'
import { useLocation } from 'react-router-dom'

import { Error, Loading } from '../../alerts'
import { useFetch } from '../../../hooks'
import { movieDatabase } from '../../../config'
import FilterGenresList from './FilterGenresList'

import styles from './FilterGenres.module.scss'

const FilterGenres = ({isClicked}) => {
  
  let path = useLocation();
  let location = (path.pathname.split('/')[1]);
  
  const API_URL = `${movieDatabase.baseUrl}/3/genre/${(location === 'shows') ? 'tv' : 'movie' }/list?api_key=${movieDatabase.apiKey}&language=en-US`;
  const [genres, isLoading, error] = useFetch(API_URL);

  return (
    error ? <Error>{error}</Error> : 
    isLoading || !genres ? (<Loading />) : (
      <div className={`${styles.genres} ${isClicked ? styles.hide : ''}`}>
        <p className={styles.genres__title} >Genres</p>
        <FilterGenresList location={location} genres={genres} />
      </div>
    )
  )
}

export default FilterGenres
