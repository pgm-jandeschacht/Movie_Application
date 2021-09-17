import React from 'react'

import BigListItem from './BigListItem'
import { Loading, Error } from '../alerts'

import styles from './BigListList.module.scss'

const BigListList = ({ movies, isLoading, error, location }) => {
  return (
  error ? <Error>{error}</Error> : 
  isLoading || !movies ? (<Loading />) : (

    <ul className={styles.movies__list}>
      { movies.results.map((movie) => (
        <BigListItem location={location} key={movie.id} movie={movie} />
      )) }
    </ul>

  )
  )
}

export default BigListList
