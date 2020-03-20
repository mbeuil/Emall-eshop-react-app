/** @format */

// node_modules
import React, { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Redux dispatch + selector
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

// Styles + Types + Interfaces
import * as S from './cart-icon.styles';

const CartIcon = () => {
  const cartItemsCount = useSelector(selectCartItemsCount);
  const dispatch = useDispatch();
  const toggleCartState = () => dispatch(toggleCartHidden());

  return (
    <S.CartIconButton
      onClick={toggleCartState}
      onKeyDown={toggleCartState}
      role="button"
      tabIndex={0}
    >
      <S.ShoppingIconContainer />
      <S.ItemCount>{cartItemsCount}</S.ItemCount>
    </S.CartIconButton>
  );
};

export default memo(CartIcon);
