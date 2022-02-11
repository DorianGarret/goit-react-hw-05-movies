import { Outlet } from 'react-router-dom';

import {
  CardMovie,
  Overview,
  Poster,
  Genres,
  Tag,
  Nav,
  Link,
} from './MovieDetails.styled';

export const MovieDetails = ({
  movie: { poster_path, title, vote_average, overview, genres },
}) => {
  return (
    <CardMovie>
      <Poster
        src={`https://image.tmdb.org/t/p/w400/${poster_path}`}
        alt={title}
      />
      <div>
        <p>{`Vote average: ${vote_average}`}</p>
        <p>
          <Overview>Overview:</Overview>
        </p>
        <p>{overview}</p>
        <p>
          <Genres>Genres:</Genres>
        </p>
        <Tag>
          {genres?.map(({ id, name }) => (
            <span key={id} color="orange">
              {name}
            </span>
          ))}
        </Tag>
        <Nav>
          <Link to={'cast'}>Cast</Link>
          <Link to={'reviews'}>Reviews</Link>
        </Nav>
        <Outlet />
      </div>
    </CardMovie>
  );
};
