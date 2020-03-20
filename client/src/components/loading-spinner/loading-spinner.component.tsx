/** @format */

// node_modules
import React from 'react';

// Styles + Types + Interfaces
import * as S from './loading-spinner.styles';

const LoadingSpinner: React.FC = () => {
  return (
    <S.SpinnerOverlay>
      <S.SpinnerContainer />
    </S.SpinnerOverlay>
  );
};

export default LoadingSpinner;
