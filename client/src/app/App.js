import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { appConfig } from './config';
import * as Routes from './routes';

import { MoviesPage, ShowsPage, NotFoundPage, HomePage, UserPage, MovieDetailPage, ShowDetailPage } from './pages';

import styles from './App.module.scss';
import './styling/main.scss';

function App() {
  
  return (
    <div className={styles.app}>
      <Router basename={appConfig.basicURL}>
        <Switch>
          <Route exact path={Routes.MOVIES}>
            <MoviesPage />
          </Route>
          <Route exact path={Routes.SHOWS}>
            <ShowsPage />
          </Route>
          <Route exact path={Routes.USER}>
            <UserPage />
          </Route>
          <Route exact path={Routes.DETAILMOVIES}>
            <MovieDetailPage />
          </Route>
          <Route exact path={Routes.DETAILSHOWS}>
            <ShowDetailPage />
          </Route>
          <Route exact path={Routes.FOUROFOUR}>
            <NotFoundPage />
          </Route>
          <Redirect from={Routes.HOME} to={Routes.LANDING} />
          <Route exact path={Routes.LANDING}>
            <HomePage />
          </Route>
          <Route>
            <NotFoundPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
