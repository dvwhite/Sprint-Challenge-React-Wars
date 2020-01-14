import styled from 'styled-components';

const CardTitle = styled.h2`
  font-size: 1rem;
  padding: 0;
  margin: 2%;

  @media (max-width: 950px) {
    font-size: 1.6rem;
  }

  @media (max-width: 750px) {
    font-size: 1rem;
  }

  @media (max-width: 550px) {
    font-size: 0.4rem;
  }
`;

export default CardTitle;