import { Link, Nav } from './NavigationBar.styled';

export const NavigationBar = () => {
  return (
    <Nav>
      <Link to={'/'}>Home</Link>
      <Link to={'/movies'}>Movies</Link>
    </Nav>
  );
};
