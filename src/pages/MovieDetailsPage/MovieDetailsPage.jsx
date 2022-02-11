import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { byIdWithFullDescription } from 'services/movieApi';
import { PageTitle } from 'components/PageTitle';
import { MovieDetails } from './components/MovieDetails';
import { prepareMovieTitle } from 'utils/prepareMovieTitle';
import { MovieDetailsContext } from 'context/MovieDetailsContext';

export const MovieDetailsPage = () => {
  const [movieDetails, setMovieDetails] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    async function movieDetailsHandler() {
      try {
        const res = await byIdWithFullDescription(movieId);
        setMovieDetails(res);
      } catch (error) {}
    }
    movieDetailsHandler();
  }, [movieId]);

  return (
    <>
      {movieDetails && (
        <>
          <MovieDetailsContext.Provider
            value={{
              cast: movieDetails.credits.cast,
              reviews: movieDetails.reviews.results,
            }}
          >
            <PageTitle title={prepareMovieTitle(movieDetails)} />
            <MovieDetails movie={movieDetails} />
          </MovieDetailsContext.Provider>
        </>
      )}
    </>
  );
};
