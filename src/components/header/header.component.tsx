/** @format */

// node_modules
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Components
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropDown from '../cart-dropdown/cart-dropdown.component';

// Redux dispatch + selector
import { signOutStart } from '../../redux/user/user.actions';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectCartHidden } from '../../redux/cart/cart.selectors';

// Styles + Types + Interfaces
import * as S from './header.styles';

const Header: React.FC = () => {
  const currentUser = useSelector(selectCurrentUser);
  const hidden = useSelector(selectCartHidden);
  const dispatch = useDispatch();

  const signOutEvent = () => {
    dispatch(signOutStart());
  };

  return (
    <S.HeaderContainer>
      <S.LogoContainer to="/">
        <S.LogoStyle />
      </S.LogoContainer>
      <S.OptionContainer>
        <S.OptionLink to="/shop">SHOP</S.OptionLink>
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
