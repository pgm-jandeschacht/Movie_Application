import React from 'react'
import { FiStar } from 'react-icons/fi';

import { Error, Loading } from '../alerts'
import { movieDatabase } from '../../config'

import styles from './PopularItems.module.scss'

const PopularItems = ({error, isLoading, results, checked}) => {
  return (
    error ? <Error>{error}</Error> : 
    isLoading || !results ? (<Loading />) : (
    <ul className={styles.popular__list}>
      {results.results.map((result, index) => (
        <li key={result.id} className={`${styles.popular__list__item} ${index >= 8 ? styles.hide : ''}`} >
          <a href={`/${checked === 'movie' ? 'movies' : 'shows'}/${result.id}`} className={styles.popular__list__item__link} >
            <div className={styles.popular__list__item__link__img} >
              <img src={`${movieDatabase.baseUrlImage}w500${result.poster_path}`} alt={`Poster of ${result.title}`} />
            </div>
    
            <div className={styles.popular__list__item__link__text} >
              <p className={styles.title} >{checked === 'movie' ? result.title : result.name}</p>
              <div className={styles.container} >
                <p className={styles.rating} ><FiStar />{result.vote_average}/10</p>
                <p className={styles.release} >{checked === 'movie' ? result.release_date : result.first_air_date}</p>
              </div>
            </div>
          </a>
        </li>
      ))}
    </ul>
    )
  )
}

export default PopularItems
