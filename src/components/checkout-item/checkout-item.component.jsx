/** @format */

import React, { memo } from 'react';
import { useDispatch } from 'react-redux';

import ClickableIcon from '../clickable-icon/clickable-icon.component';
import {
  delFromCart,
  addItem,
  removeItem,
} from '../../redux/cart/cart.actions';
import { ReactComponent as Bin } from '../../assets/bin.svg';

import './checkout-item.style.css';

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const dispatch = useDispatch();
  const deleteItemFromCart = () => dispatch(delFromCart(cartItem));
  const addItemToCart = () => dispatch(addItem(cartItem));
  const removeItemFromCart = () => dispatch(removeItem(cartItem));

  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <ClickableIcon className="arrow" handleClick={removeItemFromCart}>
          &#10094;
        </ClickableIcon>
        <span className="value">{quantity}</span>
        <ClickableIcon className="arrow" handleClick={addItemToCart}>
          &#10095;
        </ClickableIcon>
      </span>
      <span className="price">{price}</span>
      <ClickableIcon className="remove-button" handleClick={deleteItemFromCart}>
        <Bin className="bin" />
      </ClickableIcon>
    </div>
  );
};

export default memo(CheckoutItem);
