import React, { useState } from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import './register.style.css';

const Register = () => {
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmedPassword, setConfirmedPassword] = useState('');

  const handleSubmit = async event => {
    event.preventDefault();
    if (password !== confirmedPassword) {
      alert("passwords don't match");
      return;
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password);
      await createUserProfileDocument(user, displayName);
      setDisplayName('');
      setEmail('');
      setPassword('');
      setConfirmedPassword('');
    } catch (error) {
      console.error('error creating a user with an email and a password', error.message);
    }
  };

  return (
    <div className="register">
      <h2 className="title">I do not have an account</h2>
      <span>Sign up with your email and password</span>
      <form className="register-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          onChange={event => {
            setDisplayName(event.target.value);
          }}
          label="Display Name"
          required
        />
        <FormInput
          type="email"
          name="email"
          value={email}
          onChange={event => {
            setEmail(event.target.value);
          }}
          label="Email"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          onChange={event => {
            setPassword(event.target.value);
          }}
          label="Password"
          required
        />
        <FormInput
          type="password"
          name="confirmedPassword"
          value={confirmedPassword}
          onChange={event => {
            setConfirmedPassword(event.target.value);
          }}
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
