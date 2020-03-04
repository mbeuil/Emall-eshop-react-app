/** @format */

import React from 'react';

import * as S from './with-loading.styles';

interface WithLoadingProps {
  isLoading: boolean;
}

const WithLoading = <P extends object>(
  Component: React.ComponentType<P>,
): React.FC<P & WithLoadingProps> => ({
  isLoading,
  ...props
}: WithLoadingProps) => {
  return isLoading ? (
    <S.SpinnerOverlay>
      <S.SpinnerContainer />
    </S.SpinnerOverlay>
  ) : (
    <Component {...(props as P)} />
  );
};

export default WithLoading;
