/** @format */

import React, { useState, memo } from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import * as S from './register.styles';

const Register = () => {
  const [values, setValues] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmedPassword: '',
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (values.password !== values.confirmedPassword) {
      alert("passwords don't match");
      return;
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        values.email,
        values.password,
      );
      const { displayName } = values;
      await createUserProfileDocument(user, { displayName });
      setValues({
        displayName: '',
        email: '',
        password: '',
        confirmedPassword: '',
      });
    } catch (error) {
      console.error(
        'error creating a user with an email and a password',
        error.message,
      );
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setValues({ ...values, [name]: value });
  };

  return (
    <S.RegisterContainer>
      <S.TitleContainer>I do not have an account</S.TitleContainer>
      <span>Sign up with your email and password</span>
      <form className="register-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={values.displayName}
          onChange={handleChange}
          label="Display Name"
          required
        />
        <FormInput
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          label="Email"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={values.password}
          onChange={handleChange}
          label="Password"
          required
        />
        <FormInput
          type="password"
          name="confirmedPassword"
          value={values.confirmedPassword}
          onChange={handleChange}
          label="Confirmed Password"
          required
        />
        <CustomButton type="submit">Register</CustomButton>
      </form>
    </S.RegisterContainer>
  );
};

export default memo(Register);
