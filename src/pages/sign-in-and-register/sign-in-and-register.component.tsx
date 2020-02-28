/** @format */

import React from 'react';

import SignIn from '../../components/sign-in/sign-in.component';
import Register from '../../components/register/register.component';

import * as S from './sign-in-and-register.styles';

const SignInAndRegisterPage: React.FC = () => {
  return (
    <S.SignInAndRegisterContainer>
      <SignIn />
      <Register />
    </S.SignInAndRegisterContainer>
  );
};

export default SignInAndRegisterPage;
