/** @format */

// node_modules
import React, { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

// Components
import CartItem from '../cart-item/cart-item.component';

// Redux dispatch + selector
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItems } from '../../redux/cart/cart.selectors';

// Styles + Types + Interfaces
import * as S from './cart-dropdown.styles';
import * as T from '../../Types';

const CartDropDown: React.FC = () => {
  const cartItems: T.CartItemProps[] = useSelector(selectCartItems);
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
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} {...cartItem} />
          ))
        ) : (
          <S.EmptyMessage>Your cart is empty</S.EmptyMessage>
        )}
      </S.CartItemsContainer>
      <S.CheckoutButton onClick={goToCheckout}>Go to checkout</S.CheckoutButton>
    </S.CartDropdownContainer>
  );
};

export default memo(CartDropDown);
