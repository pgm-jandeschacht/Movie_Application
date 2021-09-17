import React, { useState, useEffect } from 'react'
import { FiStar } from 'react-icons/fi';
import { FiX } from 'react-icons/fi';

import { Loading, Error } from '../../alerts'
import { movieDatabase } from '../../../config'
import { useFetch } from '../../../hooks'
import fallback from '../../../../assets/images/fallback_image.png';

import styles from './SearchResults.module.scss'

const SearchResults = ({query, onClosed}) => {
  const [isClosed, setIsClosed] = useState(true);

  const handleClick = () => {
    setIsClosed(!isClosed)
  }
  
  useEffect(() => {
    onClosed(isClosed)
  })
  
  const API_URL = `${movieDatabase.baseUrl}/3/search/multi?api_key=${movieDatabase.apiKey}&language=en-US&query=${query}&page=1`;
  const [data, isLoading, error] = useFetch(API_URL);
  
  return (
    (error ? <Error>{error}</Error> : 
    isLoading || !data ? <Loading /> : (
      <div className={styles.results}>
        <div className={styles.results__title__container}>
          <h2 className={styles.results__title__container__title} >Results shown for "<span className={styles.red}>{query}</span>"</h2>
          
          <FiX onClick={handleClick} />
        </div>
        
        {data.results.length === 0 ? <p className={styles.results__nothing} >Oh no, we found nothing in our database! <span>Please check your spelling.</span></p> : 
          <ul className={styles.results__list}>
            { data.results.map((search) => (
              (search.media_type !== 'tv' && search.media_type !== 'movie' ? '' : 
              <li key={search.id} className={styles.results__list__item}>
                <a href={`/${search.media_type === 'movie' ? 'movies' : 'shows'}/${search.id}`} className={styles.results__list__item__link} >
                  <p className={styles.media_type}>{search.media_type === 'movie' ? 'Movie' : 'Show'}</p>
                  
                  <div className={styles.results__list__item__link__img} >
                    <img src={`${search.poster_path === null ? fallback : `${movieDatabase.baseUrlImage}w500${search.poster_path}`}`} alt={`Poster of ${search.title}`} />
                  </div>

                  <div className={styles.results__list__item__link__text} >
                    <p className={styles.title} >{search.media_type === 'movie' ? search.title : search.name}</p>
                    <div className={styles.container} >
                      <p className={styles.rating} ><FiStar />{search.vote_average}/10</p>
                      <p className={styles.release} >{search.media_type === 'movie' ? search.release_date : search.first_air_date}</p>
                    </div>
                  </div>
                </a>
              </li>
            ))) }
          </ul>
        }
      </div>
    ))
    )
}

export default SearchResults
