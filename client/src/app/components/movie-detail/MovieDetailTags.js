import React from 'react'

import { useFetch } from '../../hooks'
import { movieDatabase } from '../../config'
import { Error, Loading } from '../alerts'

import styles from './MovieDetailTags.module.scss'

const MovieDetailTags = ({id}) => {

  const API_URL = `${movieDatabase.baseUrl}/3/movie/${id}/keywords?api_key=${movieDatabase.apiKey}&language=en-US`;
  const [tags, isLoading, error] = useFetch(API_URL);

  return (
    error ? <Error>{error}</Error> : 
    isLoading || !tags ? (<Loading />) : (
      <ul className={styles.tags}>
        {tags.keywords.map(tag => (
            <li className={styles.tags__item} key={tag.id}>{ tag.name }</li>
          ))}
      </ul>
    )
  )
}

export default MovieDetailTags
