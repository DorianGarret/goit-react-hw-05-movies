import { useContext } from 'react';
import { MovieDetailsContext } from 'context/MovieDetailsContext';
import { Character, ItemWrapper, List, ListItem, Name } from './Cast.styled';

export const Cast = () => {
  const { cast } = useContext(MovieDetailsContext);
  return (
    <List>
      {cast
        .filter(({ profile_path }) => profile_path)
        .map(({ id, name, profile_path, character }) => (
          <ListItem key={id}>
            {profile_path && (
              <>
                <img
                  src={`https://image.tmdb.org/t/p/w400/${profile_path}`}
                  height="175"
                  alt={name}
                />
                <ItemWrapper>
                  <Name>{name}</Name>
                  <p>
                    <Character>Character: </Character>
                    {character}
                  </p>
                </ItemWrapper>
              </>
            )}
          </ListItem>
        ))}
    </List>
  );
};
