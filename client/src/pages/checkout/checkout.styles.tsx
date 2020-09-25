/** @format */

import styled from 'styled-components';

export const CheckoutPageContainer = styled.div`
  width: 55%;
  min-height: 75vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;

  @media screen and (max-width: 800px) {
    width: 90%;
  }
`;

export const CheckoutHeaderContainer = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;
`;

export const HeaderBlock = styled.div`
  text-transform: capitalize;
  width: 23%;

  &:last-child {
    width: 8%;
  }

  @media screen and (max-width: 800px) {
    width: 22%;

    &:last-child {
      width: 12%;
    }
  }
`;

export const CartTotal = styled.div`
  margin-top: 30px;
  margin-left: auto;
  font-size: 34px;
  margin-right: 35px;
`;

export const ButtonContainer = styled.div`
  margin-left: auto;
  margin-top: 20px;
`;

export const WarningMessage = styled.div`
  text-align: center;
  margin-top: 40px;
  font-size: 20px;
  color: #ee605f;
`;
