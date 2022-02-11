import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  display: flex;
  gap: 20px;
`;

export const Link = styled(NavLink)`
  padding: 15px 0;
  color: var(--bs-gray-600);
  &.active {
    color: var(--bs-primary);
  }
`;
