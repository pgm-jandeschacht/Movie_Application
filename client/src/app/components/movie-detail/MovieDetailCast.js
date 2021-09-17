import React, {useState} from 'react'

import { useFetch } from '../../hooks'
import { movieDatabase } from '../../config'
import { Error, Loading } from '../alerts'
import fallback from '../../../assets/images/fallback_image.png'

import styles from './MovieDetailCast.module.scss'

const MovieDetailCast = ({id}) => {
  const [load, setLoad] = useState(false);
  const [text, setText] = useState('Load more');

  const handleClick = () => {
    setLoad(!load)
    !load ? setText('Close') : setText('Load more')
  }

  const API_URL = `${movieDatabase.baseUrl}/3/movie/${id}/credits?api_key=${movieDatabase.apiKey}&language=en-US`;
  const [cast, isLoading, error] = useFetch(API_URL);

  return (
    error ? <Error>{error}</Error> : 
    isLoading || !cast ? (<Loading />) : (
      <div className={styles.movie_detail__cast}>
        <h2>Cast</h2>

        <ul className={styles.movie_detail__cast__list}>{cast.cast.map((member, index) => ( 

            <li className={`${styles.movie_detail__cast__list__item} ${!load && index  >= 10 ? styles.hide : ''}`} key={member.id}>
              <div>
                <img src={member.profile_path === null ? fallback : `${movieDatabase.baseUrlImage}w500${member.profile_path}` } alt={member.name} />
                <p className={styles.name}>{member.name}</p>
                <p className={styles.character}>as <span className={styles.red}>{member.character}</span></p>
              </div>
            </li>

          ))}
        </ul>

        {cast.cast.length <= 10 ? '' : <button onClick={handleClick}>{text}</button>}
      </div>
    )
  )
}

export default MovieDetailCast
