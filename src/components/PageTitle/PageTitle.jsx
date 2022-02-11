import styled from 'styled-components';

const Title = styled.h1`
  padding-bottom: 20px;
`;

export const PageTitle = ({ title }) => {
  return <Title>{title}</Title>;
};
