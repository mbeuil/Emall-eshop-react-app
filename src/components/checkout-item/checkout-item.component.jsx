/** @format */

import React, { memo } from 'react';
import { useDispatch } from 'react-redux';

import {
  delFromCart,
  addItem,
  removeItem,
} from '../../redux/cart/cart.actions';

import * as S from './checkout-item.styles';

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const dispatch = useDispatch();
  const deleteItemFromCart = () => dispatch(delFromCart(cartItem));
  const addItemToCart = () => dispatch(addItem(cartItem));
  const removeItemFromCart = () => dispatch(removeItem(cartItem));

  return (
    <S.CheckoutItemContainer>
      <S.ImageContainer>
        <img src={imageUrl} alt="item" />
      </S.ImageContainer>
      <S.TextStyles>{name}</S.TextStyles>
      <S.QuantityContainer>
        <S.ArrowIconButton handleClick={removeItemFromCart}>
          &#10094;
        </S.ArrowIconButton>
        <span>{quantity}</span>
        <S.ArrowIconButton className="arrow" handleClick={addItemToCart}>
          &#10095;
        </S.ArrowIconButton>
      </S.QuantityContainer>
      <S.TextStyles>{price}</S.TextStyles>
      <S.RemoveIconButton handleClick={deleteItemFromCart}>
        <S.TrashCanContainer />
      </S.RemoveIconButton>
    </S.CheckoutItemContainer>
  );
};

export default memo(CheckoutItem);
