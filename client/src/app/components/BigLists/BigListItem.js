import React from 'react'
import { FiStar } from 'react-icons/fi';

import { movieDatabase } from '../../config'

import styles from './BigListItem.module.scss'

const BigListItem = ({ movie, location }) => {
  return (
    <li key={movie.id} className={styles.movies__list__item} >
      <a href={`/${location}/${movie.id}`} className={styles.movies__list__item__link} >
        <div className={styles.movies__list__item__link__img} >
          <img src={`${movieDatabase.baseUrlImage}w500${movie.poster_path}`} alt={`Poster of ${movie.title}`} />
        </div>

        <div className={styles.movies__list__item__link__text} >
          <p className={styles.title} >{location === 'movies' ? movie.title : movie.name}</p>
          <div className={styles.container} >
            <p className={styles.rating} ><FiStar />{movie.vote_average}/10</p>
            <p className={styles.release} >{location === 'movies' ? movie.release_date : movie.first_air_date}</p>
          </div>
        </div>
      </a>
    </li>
  )
}

export default BigListItem
