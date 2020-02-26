/** @format */

import React from 'react';

import Login from '../../components/sign-in/sign-in.component';
import Register from '../../components/register/register.component';

import * as S from './sign-in-and-register.styles';

const SignInAndRegisterPage = () => {
  return (
    <S.SignInAndRegisterContainer>
      <Login />
      <Register />
    </S.SignInAndRegisterContainer>
  );
};

export default SignInAndRegisterPage;
