/** @format */

import React from 'react';
import Login from '../../components/sign-in/sign-in.component';
import Register from '../../components/register/register.component';

import './sign-in-and-register.style.css';

const SignInAndRegisterPage = () => {
  return (
    <div className="sign-in-and-register">
      <Login />
      <Register />
    </div>
  );
};

export default SignInAndRegisterPage;
