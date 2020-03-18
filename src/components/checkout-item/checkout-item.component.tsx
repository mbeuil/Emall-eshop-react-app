/** @format */

// node_modules
import React, { memo } from 'react';
import { useDispatch } from 'react-redux';

// Redux dispatch + selector
import {
  delFromCart,
  addItem,
  removeItem,
} from '../../redux/cart/cart.actions';

// Styles + Types + Interfaces
import * as S from './checkout-item.styles';
import * as T from '../../Types';

const CheckoutItem: React.FC<T.CartItemProps> = (cartItem) => {
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
        <S.ArrowIconButton
          onClick={removeItemFromCart}
          onKeyDown={removeItemFromCart}
          role="button"
          tabIndex={0}
        >
          &#10094;
        </S.ArrowIconButton>
        <span>{quantity}</span>
        <S.ArrowIconButton
          onClick={addItemToCart}
          onKeyDown={addItemToCart}
          role="button"
          tabIndex={0}
        >
          &#10095;
        </S.ArrowIconButton>
      </S.QuantityContainer>
      <S.TextStyles>{price}</S.TextStyles>
      <S.RemoveIconButton
        onClick={deleteItemFromCart}
        onKeyDown={deleteItemFromCart}
        role="button"
        tabIndex={0}
      >
        <S.TrashCanContainer />
      </S.RemoveIconButton>
    </S.CheckoutItemContainer>
  );
};

export default memo(CheckoutItem);
