import React, { useState } from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

import './login.style.css';

const Login = () => {
  const [values, setValues] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = async event => {
    event.preventDefault();

    try {
      await auth.signInWithEmailAndPassword(values.email, values.password);
      setValues({
        email: '',
        password: ''
      });
    } catch (error) {
      console.error('error while login with an email and a password', error.message);
    }
  };

  const handleChange = event => {
    const { name, value } = event.target;

    setValues({ ...values, [name]: value });
  };

  return (
    <div className="login">
      <h2 className="title">I already have an account</h2>
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
        <div className="buttons">
          <CustomButton type="submit">Login</CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
            Login with Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default Login;
