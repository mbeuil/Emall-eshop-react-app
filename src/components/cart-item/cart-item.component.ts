/** @format */

import React, { memo } from 'react';

import * as S from './cart-item.styles';

const CartItem = ({ item: { imageUrl, name, price, quantity } }) => {
  const string1 = ' x $';

  return (
    <S.CartItemContainer>
      <img src={imageUrl} alt="item" />
      <S.ItemDetails>
        <span>{name}</span>
        <span>
          {quantity}
          {string1}
          {price}
        </span>
      </S.ItemDetails>
    </S.CartItemContainer>
  );
};

export default memo(CartItem);
