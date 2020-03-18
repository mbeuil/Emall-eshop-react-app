/** @format */

// node_modules
import React, { useState, memo } from 'react';
import { useDispatch } from 'react-redux';

// Local modules
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {
  googleSignInStart,
  emailSignInStart,
} from '../../redux/user/user.actions';

// Styles + Types + Interfaces
import * as S from './sign-in.styles';

const SignIn: React.FC = () => {
  const [values, setValues] = useState({
    email: '',
    password: '',
  });
  const dispatch = useDispatch();

  const signInWithGoogle = () => {
    dispatch(googleSignInStart());
  };

  const signInWithEmail = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(emailSignInStart(values));
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;

    setValues({ ...values, [name]: value });
  };

  return (
    <S.SignInContainer>
      <S.TitleContainer>I already have an account</S.TitleContainer>
      <span>Sign in with your email and password</span>
      <form onSubmit={signInWithEmail}>
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
          <CustomButton type="button" onClick={signInWithGoogle} isGoogleSignIn>
            Sign in with Google
          </CustomButton>
        </S.SignInButtonContainer>
      </form>
    </S.SignInContainer>
  );
};

export default memo(SignIn);
