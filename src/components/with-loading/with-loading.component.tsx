/** @format */

import React from 'react';

import * as S from './with-loading.styles';

interface WithLoadingProps {
  loading: boolean;
}

const WithLoading = <P extends object>(
  Component: React.ComponentType<P>,
): React.FC<P & WithLoadingProps> => ({
  loading,
  ...props
}: WithLoadingProps) => {
  return loading ? (
    <S.SpinnerOverlay>
      <S.SpinnerContainer />
    </S.SpinnerOverlay>
  ) : (
    <Component {...(props as P)} />
  );
};

export default WithLoading;
