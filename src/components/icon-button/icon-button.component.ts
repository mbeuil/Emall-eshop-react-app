/** @format */

import React, { memo } from 'react';

const IconButton = ({ className, handleClick, children }) => {
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

export default memo(IconButton);
