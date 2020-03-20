/** @format */

// node_modules
import React, { useState, memo } from 'react';
import { useDispatch } from 'react-redux';

// Components
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

// Redux dispatch + selector
import { registerStart } from '../../redux/user/user.actions';

// Styles + Types + Interfaces
import * as S from './register.styles';

const Register: React.FC = () => {
  const [values, setValues] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmedPassword: '',
  });
  const dispatch = useDispatch();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { displayName, email, password, confirmedPassword } = values;

    if (password !== confirmedPassword) {
      alert("passwords don't match");
      return;
    }
    dispatch(registerStart({ displayName, email, password }));
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
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
          handleChange={handleChange}
          label="Display Name"
          required
        />
        <FormInput
          type="email"
          name="email"
          value={values.email}
          handleChange={handleChange}
          label="Email"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={values.password}
          handleChange={handleChange}
          label="Password"
          required
        />
        <FormInput
          type="password"
          name="confirmedPassword"
          value={values.confirmedPassword}
          handleChange={handleChange}
          label="Confirmed Password"
          required
        />
        <CustomButton type="submit">Register</CustomButton>
      </form>
    </S.RegisterContainer>
  );
};

export default memo(Register);
