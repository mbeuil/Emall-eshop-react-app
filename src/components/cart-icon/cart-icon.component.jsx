import React from 'react';
import { useDispatch } from 'react-redux';
import { ReactComponent as ShoppingIcon } from '../../assets/cart.svg';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

import './cart-icon.style.css';

const CartIcon = () => {
  const dispatch = useDispatch();

  return (
    <div className="cart-icon" onClick={() => dispatch(toggleCartHidden())}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

export default CartIcon;
