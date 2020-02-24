/** @format */

import React from 'react';

import * as S from './loading-spinner.styles';

const LoadingSpinner = (WrappedComponent) => {
  const Spinner = ({ isLoading, ...props }) => {
    return isLoading ? (
      <S.SpinnerOverlay>
        <S.SpinnerContainer />
      </S.SpinnerOverlay>
    ) : (
      <WrappedComponent {...props} />
    );
  };
  return Spinner;
};

export default LoadingSpinner;
