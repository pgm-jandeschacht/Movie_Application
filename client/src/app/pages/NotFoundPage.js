import { useHistory } from "react-router-dom";

import { BaseLayout } from '../layouts';
import NotFoundImage from '../../assets/images/NotFound.png'

import styles from './NotFoundPage.module.scss'

const NotFoundPage = () => {
  const history = useHistory();

  return (
    <BaseLayout>
      <section className={styles.not_found}>
        <div className={styles.not_found__text}>
          <h2>Whooooops!</h2>
          <p>Looks like this page doesn't exist.</p>
          <button className={styles.btn_not_found} onClick={() => history.goBack() }>Go back</button> 
        </div>

        <div className={styles.not_found__img}>
          <img src={NotFoundImage} alt="Not Found" />
        </div>
      </section>
    </BaseLayout>
  );
};

export default NotFoundPage;