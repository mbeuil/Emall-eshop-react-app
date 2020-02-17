import React, { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ClickableIcon from '../clickable-icon/clickable-icon.component';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { ReactComponent as ShoppingIcon } from '../../assets/cart.svg';

import './cart-icon.style.css';

const CartIcon = () => {
  const cartItemsCount = useSelector(selectCartItemsCount);
  const dispatch = useDispatch();
  const toggleCartState = () => dispatch(toggleCartHidden());

  return (
    <ClickableIcon className="cart-icon" handleClick={toggleCartState}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{cartItemsCount}</span>
    </ClickableIcon>
  );
};

export default memo(CartIcon);
