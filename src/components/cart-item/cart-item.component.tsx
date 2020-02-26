/** @format */

import React, { memo } from 'react';

import * as S from './cart-item.styles';

interface CartItemProps {
  imageUrl: string;
  name: string;
  price: number;
  quantity: number;
}

const CartItem = ({
  imageUrl,
  name,
  price,
  quantity,
}: CartItemProps): JSX.Element => {
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
