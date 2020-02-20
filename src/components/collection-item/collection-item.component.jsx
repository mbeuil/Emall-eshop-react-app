/** @format */

import React, { memo } from 'react';
import { useDispatch } from 'react-redux';

import { addItem } from '../../redux/cart/cart.actions';

import * as S from './collection-item.styles';

const CollectionItem = ({ item }) => {
  const { name, price, imageUrl } = item;
  const dispatch = useDispatch();

  const handleClick = () => {
    return dispatch(addItem(item));
  };

  return (
    <S.CollectionItemContainer>
      <S.BackgroundImage style={{ backgroundImage: `url(${imageUrl})` }} />
      <S.ItemFooterContainer>
        <S.ItemName>{name}</S.ItemName>
        <S.ItemPrice>{price}</S.ItemPrice>
      </S.ItemFooterContainer>
      <S.AddToCartButton onClick={handleClick} inverted>
        Add to cart
      </S.AddToCartButton>
    </S.CollectionItemContainer>
  );
};

export default memo(CollectionItem);
