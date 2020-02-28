/** @format */

import React from 'react';
import { useSelector } from 'react-redux';

import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropDown from '../cart-dropdown/cart-dropdown.component';

import * as S from './header.styles';

const signOutEvent = () => {
  auth.signOut();
};

const Header: React.FC = () => {
  const currentUser = useSelector(selectCurrentUser);
  const hidden = useSelector(selectCartHidden);

  return (
    <S.HeaderContainer>
      <S.LogoContainer to="/">
        <S.LogoStyle />
      </S.LogoContainer>
      <S.OptionContainer>
        <S.OptionLink to="/shop">SHOP</S.OptionLink>
        <S.OptionLink to="/shop">CONTACT</S.OptionLink>
        {currentUser ? (
          <S.OptionDiv
            onClick={signOutEvent}
            onKeyDown={signOutEvent}
            role="button"
            tabIndex={0}
          >
            SIGN OUT
          </S.OptionDiv>
        ) : (
          <S.OptionLink to="/signin">SIGN IN</S.OptionLink>
        )}
        <CartIcon />
      </S.OptionContainer>
      {hidden ? null : <CartDropDown />}
    </S.HeaderContainer>
  );
};

export default Header;
