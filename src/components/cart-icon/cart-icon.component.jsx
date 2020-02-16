import React, { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { ReactComponent as ShoppingIcon } from '../../assets/cart.svg';

import './cart-icon.style.css';

const CartIcon = () => {
  const cartItemsCount = useSelector(selectCartItemsCount);
  const dispatch = useDispatch();
  const toggleCartState = () => dispatch(toggleCartHidden());

  return (
    <div
      className="cart-icon"
      onClick={toggleCartState}
      onKeyDown={toggleCartState}
      role="button"
      tabIndex={0}
    >
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{cartItemsCount}</span>
    </div>
  );
};

export default memo(CartIcon);
