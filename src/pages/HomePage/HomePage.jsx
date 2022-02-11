import { PageTitle } from 'components/PageTitle';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { dayTrending } from 'services/movieApi';

export const HomePage = () => {
  const [trendMovies, setTrendMovies] = useState([]);
  useEffect(() => {
    async function trendMoviesHandler() {
      try {
        const { results } = await dayTrending();
        setTrendMovies(results);
      } catch (error) {}
    }
    trendMoviesHandler();
  }, []);

  return (
    <>
      <PageTitle title="Trending today" />
      <ul>
        {trendMovies.map(({ id, title }) => (
          <li key={id}>
            <Link to={`/movies/${id}`}>{title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};
