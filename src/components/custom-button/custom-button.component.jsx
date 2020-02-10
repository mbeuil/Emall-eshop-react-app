import React from 'react';

import './custom-button.style.css';

const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => {
  return (
    <button className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} {...otherProps}>
      {children.toUpperCase()}
    </button>
  );
};

export default CustomButton;
