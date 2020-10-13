/** @format */

// node_modules
import React from 'react';

// Styles + Types + Interfaces
import * as S from './error-fallback.styles';

const ErrorFallback = () => {
  return (
    <S.ErrorImageOverlay>
      <S.ErrorImageContainer imageUrl="https://i.imgur.com/FOeYt4E.png" />
      <S.ErrorImageText>Sorry, this page is broken</S.ErrorImageText>
    </S.ErrorImageOverlay>
  );
};

export default ErrorFallback;
