import React from "react";

import "./custom-button.style.css";

const CustomButton = ({ children, ...otherProps }) => {
  return (
    <button className="custom-button" {...otherProps}>
      {children.toUpperCase()}
    </button>
  );
};

export default CustomButton;
