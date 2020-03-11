/** @format */

import React, { useState, memo } from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

import * as S from './sign-in.styles';

const SignIn: React.FC = () => {
  const [values, setValues] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    event.preventDefault();

    try {
      await auth.signInWithEmailAndPassword(values.email, values.password);
      setValues({
        email: '',
        password: '',
      });
    } catch (error) {
      console.error(
        'error while login with an email and a password',
        error.message,
      );
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;

    setValues({ ...values, [name]: value });
  };

  return (
    <S.SignInContainer>
      <S.TitleContainer>I already have an account</S.TitleContainer>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          value={values.email}
          handleChange={handleChange}
          label="email"
          required
        />
        <FormInput
          name="password"
          type="password"
          value={values.password}
          handleChange={handleChange}
          label="password"
          required
        />
        <S.SignInButtonContainer>
          <CustomButton type="submit">Sign in</CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
            Sign in with Google
          </CustomButton>
        </S.SignInButtonContainer>
      </form>
    </S.SignInContainer>
  );
};

export default memo(SignIn);
