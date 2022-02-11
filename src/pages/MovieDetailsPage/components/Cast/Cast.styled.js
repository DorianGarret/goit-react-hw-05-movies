import styled from 'styled-components';

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: end;
`;

export const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-left: 10px;
`;

export const Name = styled.p`
  font-weight: 700;
`;

export const Character = styled.span`
  font-weight: 700;
`;
