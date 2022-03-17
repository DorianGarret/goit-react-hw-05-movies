import { Navigate, Route, Routes } from 'react-router-dom';
import { Container } from 'components/Container';
import { NavigationBar } from 'components/NavigationBar';
import { HomePage } from 'pages/HomePage';
import { MovieDetailsPage } from 'pages/MovieDetailsPage';
import { Cast } from 'pages/MovieDetailsPage/components/Cast';
import { Reviews } from 'pages/MovieDetailsPage/components/Reviews';
import { MoviesPage } from 'pages/MoviesPage/MoviesPage';
import { Main } from './App.styled';

export const App = () => {
  return (
    <>
      <Container>
        <NavigationBar />
      </Container>

      <Container>
        <Main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/movies" element={<MoviesPage />} />
            <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
            <Route path="*" element={<Navigate to={'/'} />} />
          </Routes>
        </Main>
      </Container>
    </>
  );
};
