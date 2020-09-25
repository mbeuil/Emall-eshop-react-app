/** @format */
import styled from 'styled-components';

export const SignInAndRegisterContainer = styled.div`
  width: 850px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 60px;
  justify-items: center;
  margin: 30px auto;

  @media screen and (max-width: 800px) {
    width: unset;
    grid-template-columns: 1fr;
    margin-bottom: 50px;
  }
`;
