/** @format */

import React, { memo } from 'react';

import * as S from './custom-button.styles';

interface CustomButtonProps {
  children: string;
  otherProps: object;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  children,
  ...otherProps
}) => {
  return (
    <S.CustomButtonContainer {...otherProps}>
      {children.toUpperCase()}
    </S.CustomButtonContainer>
  );
};

export default memo(CustomButton);
