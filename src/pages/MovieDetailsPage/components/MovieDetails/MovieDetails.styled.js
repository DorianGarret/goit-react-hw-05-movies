import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const CardMovie = styled.div`
  display: flex;
  gap: 40px;
`;

export const Poster = styled.img`
  max-width: 300px;
  max-height: 450px;
`;

export const Overview = styled.span`
  display: inline-block;
  margin-top: 10px;
  font-weight: 700;
`;

export const Genres = styled.span`
  display: inline-block;
  margin-top: 10px;
  font-weight: 700;
`;

export const Tag = styled.p`
  display: flex;
  gap: 20px;

  & span {
    margin-top: 10px;
    display: inline-block;
    border-radius: 5px;
    padding: 2px 5px;
    font-size: 13px;
    border: 1px solid var(--bs-primary);
    background-color: var(--bs-light-primary);
    color: var(--bs-primary);
  }
`;

export const Nav = styled.nav`
  display: flex;
  gap: 20px;
  padding: 20px 0;
`;

export const Link = styled(NavLink)`
  border: 1px solid var(--bs-primary);
  color: var(--bs-primary);
  border-radius: 6px;
  padding: 7px 15px;
  &.active {
    color: var(--bs-light);
    background-color: var(--bs-primary);
  }
`;
