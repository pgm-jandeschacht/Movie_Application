import React from 'react'

import styles from './ShowDetailStory.module.scss'

const ShowDetailOverview = ({movie}) => {

  return (
    <div className={styles.movie_detail__extra}>
    <div className={styles.movie_detail__extra__list}>
      <div className={styles.movie_detail__extra__list__story}>
        <h2>Story</h2>
        <p>{ movie.overview }</p>
      </div>
    </div>

    <div className={styles.movie_detail__extra__info}>
      <h2>Info</h2>
      <ul className={styles.movie_detail__extra__info__list}>
        <li>
          <p className={styles.subtitle}>Status</p>
          <p className={styles.info}>{movie.status}</p>
        </li>
        <li className={styles.long}>
          <p className={styles.subtitle}>languages</p>
          <ul>{movie.spoken_languages.map((lang, index) => (<li className={styles.info} key={index}>{ lang.name }</li>))}</ul>
        </li>
        <li className={styles.long}>
          <p className={styles.subtitle}>Production companies</p>
          <ul>{movie.production_companies.map((comp, index) => (<li className={styles.info} key={index}>{ comp.name }</li>))}</ul>
        </li>
      </ul>
    </div>
  </div>
    )
}

export default ShowDetailOverview
