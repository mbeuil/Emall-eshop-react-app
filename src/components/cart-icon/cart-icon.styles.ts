/** @format */

import styled from 'styled-components';
import IconButton from '../icon-button/icon-button.component';
import { ReactComponent as Cart } from '../../assets/cart.svg';

export const CartIconButton = styled(IconButton)`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  outline: none;
`;

export const ShoppingIconContainer = styled(Cart)`
  width: 24px;
  height: 24px;
  background-color: white;
`;

export const ItemCount = styled.span`
  position: absolute;
  font-size: 10px;
  font-weight: bold;
  top: 8px;
  right: 17px;
`;
