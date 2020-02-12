import React from 'react';
import Login from '../../components/login/login.component';
import Register from '../../components/register/register.component';

import './sign-in-and-sign-up.style.css';

const SignInAndSignUpPage = () => {
  return (
    <div className="sign-in-and-register">
      <Login />
      <Register />
    </div>
  );
};

export default SignInAndSignUpPage;
