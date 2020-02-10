import React from 'react';

import './custom-button.style.css';

const CustomButton = ({ children, type, ...otherProps }) => {
  return (
    <button className="custom-button" type={type} {...otherProps}>
      {children.toUpperCase()}
    </button>
  );
};

export default CustomButton;
