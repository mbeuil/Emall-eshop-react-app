/** @format */

import React, { memo } from 'react';

import './clickable-icon.style.css';

const ClickableIcon = ({ className, handleClick, children }) => {
  return (
    <div
      className={className}
      onClick={handleClick}
      onKeyDown={handleClick}
      role="button"
      tabIndex={0}
    >
      {children}
    </div>
  );
};

export default memo(ClickableIcon);
