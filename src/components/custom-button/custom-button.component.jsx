import React, { memo } from 'react';

import { ReactComponent as CreditCard } from '../../assets/card.svg';

import './custom-button.style.css';

const CustomButton = ({ children, isGoogleSignIn, inverted, stripe, ...otherProps }) => {
  return (
    <button
      className={`
        ${inverted ? 'inverted' : ''}
        ${isGoogleSignIn ? 'google-sign-in' : ''}
        ${inverted ? 'btn btn-primary' : ''}
        custom-button
        `}
      {...otherProps}
    >
      {children.toUpperCase()}
      {stripe ? <CreditCard className="icon" /> : ''}
    </button>
  );
};

export default memo(CustomButton);
