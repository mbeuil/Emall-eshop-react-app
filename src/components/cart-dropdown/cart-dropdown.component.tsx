/** @format */

import React, { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import CartItem from '../cart-item/cart-item.component';

import * as S from './cart-dropdown.styles';
import cartItemComponent from '../cart-item/cart-item.component';

interface cartItemProps {
  id: number;
  imageUrl: string;
  name: string;
  price: number;
  quantity: number;
}

const cartDropdownItems = (cartItems: cartItemProps[]) => {
  return cartItems.map((cartItem: cartItemProps) => (
    <CartItem key={cartItem.id} {...cartItem} />
  ));
};

const CartDropDown: React.FC = () => {
  const cartItems: cartItemProps[] = useSelector(selectCartItems);
  const dispatch = useDispatch();
  const history = useHistory();

  const goToCheckout = () => {
    history.push('/checkout');
    dispatch(toggleCartHidden());
  };

  return (
    <S.CartDropdownContainer>
      <S.CartItemsContainer>
        {cartItems.length ? (
          cartDropdownItems(cartItems)
        ) : (
          <S.EmptyMessage>Your cart is empty</S.EmptyMessage>
        )}
      </S.CartItemsContainer>
      <S.CheckoutButton onClick={goToCheckout}>Go to checkout</S.CheckoutButton>
    </S.CartDropdownContainer>
  );
};

export default memo(CartDropDown);
