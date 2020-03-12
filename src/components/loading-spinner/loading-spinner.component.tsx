/** @format */

import React from 'react';

import * as S from './loading-spinner.styles';

const LoadingSpinner: React.FC = () => {
  return (
    <S.SpinnerOverlay>
      <S.SpinnerContainer />
    </S.SpinnerOverlay>
  );
};

export default LoadingSpinner;
