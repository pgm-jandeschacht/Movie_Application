import React from 'react'

import logo from '../../../assets/images/logo.png'

import styles from './Footer.module.scss'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <img src={logo} alt="Logo of The Watchlist" />

        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/movies">Movies</a></li>
          <li><a href="/shows">Shows</a></li>
          <li><a href="/user">Account</a></li>
        </ul>
      </div>

      <div className={styles.footer__legal}>
        <p>© Jan Deschacht 2021 <span className={styles.red}>|</span> Programming 4</p>
      </div>
    </footer>
  )
}

export default Footer;
