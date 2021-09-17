import * as Routes from '../../routes';
import { NavLink } from "react-router-dom";
import { FiUser } from "react-icons/fi";

import logo from '../../../assets/images/logo.png';
import { Search } from '../input/search'

import styles from './MainNavigation.module.scss'

const MainNavigation = () => {
  return (
    <nav className={styles.nav}>
      <NavLink to={Routes.LANDING} exact={true} className={styles.nav__img} >
        <img src={logo} alt="Logo of The Watchlist" />
      </NavLink>

      <ul className={styles.nav__list}>
        <li className={styles.nav__list__item}>
          <NavLink to={Routes.LANDING} activeClassName="active" exact={true} >Home</NavLink>
        </li>

        <li className={styles.nav__list__item}>
          <NavLink to={Routes.MOVIES} activeClassName="active" exact={true} >Movies</NavLink>
        </li>

        <li className={styles.nav__list__item}>
          <NavLink to={Routes.SHOWS} activeClassName="active" exact={true} >Shows</NavLink>
        </li>
      </ul>
      
      <div className={styles.nav__extra}>
        <div>
          <Search />
        </div>

        <div className={styles.nav__extra__user}>
          <NavLink to={Routes.USER} activeClassName="active" exact={true} ><FiUser /></NavLink>
        </div>
      </div>
    </nav>
  );
};

export default MainNavigation;