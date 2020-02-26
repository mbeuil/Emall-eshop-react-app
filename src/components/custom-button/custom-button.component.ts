/** @format */

import React, { memo } from 'react';

import * as S from './custom-button.styles';

const CustomButton = ({ children, stripe, ...otherProps }) => {
  return (
    <S.CustomButtonContainer {...otherProps}>
      {children.toUpperCase()}
    </S.CustomButtonContainer>
  );
};

export default memo(CustomButton);
