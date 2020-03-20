/** @format */

// node_modules
import React, { memo } from 'react';

// Styles + Types + Interfaces
import * as S from './custom-button.styles';

interface CustomButtonProps {
  children: string;
  [x: string]: any;
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
