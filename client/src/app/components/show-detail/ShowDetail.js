import React from 'react'
import { useHistory } from "react-router-dom";
import { FiStar } from 'react-icons/fi';
import { FiArrowLeft } from 'react-icons/fi';

import fallback from '../../../assets/images/fallback_image.png'
import { movieDatabase } from '../../config'
import { Error, Loading } from '../alerts'
import ShowDetailStory from './ShowDetailStory'
import ShowDetailCast from './ShowDetailCast'
import ShowDetailTags from './ShowDetailTags'

import styles from './ShowDetail.module.scss'

const ShowDetail = ({error, isLoading, movie, id}) => {

  const history = useHistory();

  return (
    error ? <Error>{error}</Error> : 
    isLoading || !movie ? (<Loading />) : (
      
      <section className={styles.movie_detail}>
        <button onClick={() => history.goBack()} className={styles.back}><FiArrowLeft />Go back</button>

        <div className={styles.movie_detail__backdrop}>
          <img src={movie.backdrop_path === null ? fallback : `${movieDatabase.baseUrlImage}original${movie.backdrop_path}` } alt={`Backdrop of ${movie.name}`} />
        </div>

        <div className={styles.movie_detail__core}>
          <div className={styles.movie_detail__core__img}>
            <img src={movie.poster_path === null ? fallback : `${movieDatabase.baseUrlImage}w500${movie.poster_path}` } alt={`Poster of ${movie.name}`} />
          </div>

          <div className={styles.movie_detail__core__text}>
            <div className={styles.movie_detail__core__text__title}>
              <h1>{ movie.name }</h1>
              <p>{ movie.tagline }</p>
            </div>

            <div className={styles.movie_detail__core__text__rating}>
              <p className={styles.rating}><FiStar />{ movie.vote_average } <span className={styles.count}>({ movie.vote_count })</span></p>
            </div>

            <div className={styles.movie_detail__core__text__info}>
              <ul className={styles.movie_detail__core__text__info__extra}>
                <li>{ (movie.first_air_date).split('-')[0] }</li>
                <li>{ movie.adult === true ? '18+' : 'all audiences' }</li>
                <li>{ movie.episode_run_time } minutes</li>
              </ul>

              <ul className={styles.movie_detail__core__text__info__genres}>
                {movie.genres.map(genre => (
                  <li className={styles.movie_detail__core__text__info__genres__genre} key={genre.id}>{ genre.name }</li>
                ))}
              </ul>
            </div>

            <ShowDetailTags id={id} />
          </div>
        </div>

        <ShowDetailStory movie={movie} id={id}/>
        <ShowDetailCast id={id}/>
      </section>
  
    )
    )
}

export default ShowDetail
