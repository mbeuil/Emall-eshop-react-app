/** @format */

import styled from 'styled-components';
import CustomButton from '../custom-button/custom-button.component';

export const CollectionItemContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;
  overflow: hidden;

  &:hover {
    button {
      display: flex;
    }
  }
`;

export const BackgroundImage = styled.div`
  width: 100%;
  height: 93%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;

  ${CollectionItemContainer}:hover & {
    opacity: 0.7;
  }
`;

export const ItemFooterContainer = styled.div`
  width: 100%;
  height: 7%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;

export const ItemName = styled.span`
  width: 85%;
  margin-bottom: 15px;
`;

export const ItemPrice = styled.span`
  width: 15%;
  text-align: right;
`;

export const AddToCartButton = styled(CustomButton)`
  width: 80%;
  opacity: 0.7;
  position: absolute;
  top: 255px;
  display: none;

  ${CollectionItemContainer}:hover & {
    display: flex;
  }
`;
