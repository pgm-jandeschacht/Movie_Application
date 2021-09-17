import { useParams } from 'react-router-dom'

import { BaseLayout } from '../layouts';
import { MovieDetail } from '../components/movie-detail'
import { useFetch } from '../hooks'
import { movieDatabase } from '../config'

const DetailPage = () => {
  const params = useParams()

  const API_URL = `${movieDatabase.baseUrl}/3/movie/${params.id}?api_key=${movieDatabase.apiKey}&language=en-US`;
  const [data, isLoading, error] = useFetch(API_URL);

  return (
    <BaseLayout>
      <MovieDetail isLoading={isLoading} error={error} movie={data} id={params.id}/>
    </BaseLayout>
  );
};

export default DetailPage;