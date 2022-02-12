import styled from 'styled-components';

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
`;

export const Author = styled.p`
  font-weight: 700;
`;

export const Content = styled.p`
  max-height: 100px;
  overflow: hidden;
`;
