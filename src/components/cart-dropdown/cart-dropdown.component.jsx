/** @format */

import React, { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import CartItem from '../cart-item/cart-item.component';

import * as S from './cart-dropdown.styles';

const cartDropdownItems = (cartItems) => {
  return cartItems.map((cartItem) => (
    <CartItem key={cartItem.id} item={cartItem} />
  ));
};

const CartDropDown = ({ history }) => {
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();

  return (
    <S.CartDropdownContainer>
      <S.CartItemsContainer>
        {cartItems.length ? (
          cartDropdownItems(cartItems)
        ) : (
          <S.EmptyMessage>Your cart is empty</S.EmptyMessage>
        )}
      </S.CartItemsContainer>
      <S.CheckoutButton
        onClick={() => {
          history.push('/checkout');
          dispatch(toggleCartHidden());
        }}
      >
        Go to checkout
      </S.CheckoutButton>
    </S.CartDropdownContainer>
  );
};

export default withRouter(memo(CartDropDown));
