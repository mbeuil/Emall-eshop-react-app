import React from 'react';
import { useSelector } from 'react-redux';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';

import './cart-dropdown.style.css';

const displayCartDropdown = cartItems => {
  return cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />);
};

const CartDropDown = () => {
  const cartItems = useSelector(selectCartItems);

  return (
    <div className="cart-dropdown">
      <div className="cart-items">{displayCartDropdown(cartItems)}</div>
      <CustomButton>Go to checkout</CustomButton>
    </div>
  );
};

export default CartDropDown;
