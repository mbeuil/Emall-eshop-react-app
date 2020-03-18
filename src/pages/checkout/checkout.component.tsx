/** @format */

// node_modules
import React from 'react';
import { useSelector } from 'react-redux';

// Local modules
import {
  selectCartItems,
  selectCartTotal,
} from '../../redux/cart/cart.selectors';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';

// Styles + Types + Interfaces
import * as S from './checkout.styles';
import * as T from '../../Types';

const CheckoutPage: React.FC = () => {
  const cartItems: T.CartItemProps[] = useSelector(selectCartItems);
  const cartTotal: number = useSelector(selectCartTotal);
  const total = `TOTAL $${cartTotal}`;

  return (
    <S.CheckoutPageContainer>
      <S.CheckoutHeaderContainer>
        <S.HeaderBlock>
          <span>Product</span>
        </S.HeaderBlock>
        <S.HeaderBlock>
          <span>Description</span>
        </S.HeaderBlock>
        <S.HeaderBlock>
          <span>Quantity</span>
        </S.HeaderBlock>
        <S.HeaderBlock>
          <span>Price</span>
        </S.HeaderBlock>
        <S.HeaderBlock>
          <span>Remove</span>
        </S.HeaderBlock>
      </S.CheckoutHeaderContainer>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} {...cartItem} />
      ))}
      <S.CartTotal>{total}</S.CartTotal>
      <S.ButtonContainer>
        <StripeCheckoutButton price={cartTotal} />
      </S.ButtonContainer>
      <S.WarningMessage>
        *Please use the following test credit card for payments*
        <br />
        4242 4242 4242 4242 - Exp: 02/20 - CVV: 123
      </S.WarningMessage>
    </S.CheckoutPageContainer>
  );
};

export default CheckoutPage;
