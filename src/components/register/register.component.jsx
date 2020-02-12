import React, { useState } from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import './register.style.css';

const Register = () => {
  const [values, setValues] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmedPassword: ''
  });

  const handleSubmit = async event => {
    event.preventDefault();
    if (values.password !== values.confirmedPassword) {
      alert("passwords don't match");
      return;
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(values.email, values.password);
      await createUserProfileDocument(user, values.displayName);
      setValues({
        displayName: '',
        email: '',
        password: '',
        confirmedPassword: ''
      });
    } catch (error) {
      console.error('error creating a user with an email and a password', error.message);
    }
  };

  const handleEvent = event => {
    const { name, value } = event.target;

    setValues({ ...values, [name]: value });
  };

  return (
    <div className="register">
      <h2 className="title">I do not have an account</h2>
      <span>Sign up with your email and password</span>
      <form className="register-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={values.displayName}
          onChange={handleEvent}
          label="Display Name"
          required
        />
        <FormInput
          type="email"
          name="email"
          value={values.email}
          onChange={handleEvent}
          label="Email"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={values.password}
          onChange={handleEvent}
          label="Password"
          required
        />
        <FormInput
          type="password"
          name="confirmedPassword"
          value={values.confirmedPassword}
          onChange={handleEvent}
          label="Confirmed Password"
          required
        />
        <CustomButton type="submit">REGISTER</CustomButton>
      </form>
      <div />
    </div>
  );
};

export default Register;
