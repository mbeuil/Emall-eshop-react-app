import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { ReactComponent as ShoppingIcon } from '../../assets/cart.svg';

import './cart-icon.style.css';

const CartIcon = () => {
  const cartItems = useSelector(state => state.cart.cartItems);
  const itemCount = cartItems.reduce((accumulator, cartItem) => accumulator + cartItem.quantity, 0);
  const dispatch = useDispatch();

  const toggleCartState = () => {
    dispatch(toggleCartHidden());
  };

  return (
    <div
      className="cart-icon"
      onClick={toggleCartState}
      onKeyDown={toggleCartState}
      role="button"
      tabIndex={0}
    >
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};

export default CartIcon;
