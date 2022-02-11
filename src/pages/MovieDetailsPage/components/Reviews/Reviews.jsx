import { useContext } from 'react';
import { MovieDetailsContext } from 'context/MovieDetailsContext';

export const Reviews = () => {
  const { reviews } = useContext(MovieDetailsContext);
  console.log(reviews);
  return <div>Reviews</div>;
};
