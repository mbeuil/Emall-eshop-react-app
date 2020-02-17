import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { selectCartItems } from '../../redux/cart/cart.selectors';
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';

import './cart-dropdown.style.css';

const cartDropdownItems = cartItems => {
  return cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />);
};

const CartDropDown = ({ history }) => {
  const cartItems = useSelector(selectCartItems);

  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartDropdownItems(cartItems)
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <CustomButton onClick={() => history.push('/checkout')}>Go to checkout</CustomButton>
    </div>
  );
};

export default withRouter(memo(CartDropDown));
