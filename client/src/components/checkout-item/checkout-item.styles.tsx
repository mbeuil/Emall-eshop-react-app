/** @format */

import styled from 'styled-components';
import { ReactComponent as Bin } from '../../assets/bin.svg';

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
`;

export const ImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const TextStyles = styled.span`
  width: 23%;
  margin-top: 0;
`;

export const QuantityContainer = styled.div`
  width: 23%;
  display: flex;

  span {
    margin: 0 10px;
  }
`;

export const ArrowIconButton = styled.div`
  cursor: pointer;
  outline: none;
`;

export const RemoveIconButton = styled.div`
  padding-left: 12px;
  cursor: pointer;
  outline: none;
`;

export const TrashCanContainer = styled(Bin)`
  display: flex;
  width: 25px;
  height: 25px;
  background-color: white;
`;
