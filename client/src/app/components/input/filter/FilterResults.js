import React from 'react'
import { useLocation } from 'react-router-dom'
import { FiStar } from 'react-icons/fi';

import { Error, Loading } from '../../alerts'
import { movieDatabase } from '../../../config'
import fallback from '../../../../assets/images/fallback_image.png'

import styles from './FilterResults.module.scss'

const FilterResults = ({error, isLoading, results}) => {
  let path = useLocation();
  let location = (path.pathname.split('/')[1]);

  return (
    error ? <Error>{error}</Error> : 
    isLoading || !results ? <Loading /> : (
    <div className={styles.results__container}>
        <ul className={styles.results__container__list}>
          {results.results.map(movie => (
            <li key={movie.id} className={styles.results__container__list__item} >
              <a href={`/${location}/${movie.id}`} className={styles.results__container__list__item__link} >
                <div className={styles.results__container__list__item__link__img} >
                <img src={`${movie.poster_path === null ? fallback : `${movieDatabase.baseUrlImage}w500${movie.poster_path}`}`} alt={`Poster of ${movie.title}`} />
                </div>
        
                <div className={styles.results__container__list__item__link__text} >
                  <p className={styles.title} >{location === 'movies' ? movie.title : movie.name}</p>
                  <div className={styles.container} >
                    <p className={styles.rating} ><FiStar />{movie.vote_average}/10</p>
                    <p className={styles.release} >{location === 'movies' ? movie.release_date : movie.first_air_date}</p>
                  </div>
                </div>
              </a>
            </li>
          ))}
        </ul>
    </div>
    )
  )
}

export default FilterResults
