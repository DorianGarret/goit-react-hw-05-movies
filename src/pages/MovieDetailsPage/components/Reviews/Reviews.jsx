import { useContext } from 'react';
import { MovieDetailsContext } from 'context/MovieDetailsContext';
import { Author, Content, List } from './Reviews.styled';

export const Reviews = () => {
  const { reviews } = useContext(MovieDetailsContext);
  return (
    <List>
      {!reviews.length ? (
        <p>We don't have any reviews for this movie</p>
      ) : (
        reviews.map(({ id, author, content }) => (
          <li key={id}>
            <Author>{author}</Author>
            <Content>{content}</Content>
          </li>
        ))
      )}
    </List>
  );
};
