/** @format */
import styled from 'styled-components';
import CustomButton from '../custom-button/custom-button.component';

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-radius: 3px;
  background-color: white;
  top: 110px;
  right: 60px;
  z-index: 5;
  filter: drop-shadow(0px 4px 16px rgba(20, 23, 28, 0.25));

  &:after {
    content: '';
    position: absolute;
    top: 0;
    right: 10px;
    width: 0;
    height: 0;
    border: 11px solid transparent;
    border-bottom-color: white;
    border-top: 0;
    margin-left: -11px;
    margin-top: -11px;
  }
`;

export const CartItemsContainer = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;

export const EmptyMessage = styled.span`
  font-size: 18px;
  margin: 50px auto;
`;

export const CheckoutButton = styled(CustomButton)`
  margin-top: auto;
`;
