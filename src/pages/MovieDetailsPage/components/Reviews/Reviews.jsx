import { useContext } from 'react';
import { MovieDetailsContext } from 'context/MovieDetailsContext';

export const Reviews = () => {
  const { reviews } = useContext(MovieDetailsContext);
  return <div>Reviews</div>;
};
