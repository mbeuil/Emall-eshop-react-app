/** @format */

export const UserActionTypes = {
  SET_CURRENT_USER: 'SET_CURRENT_USER',
  GOOGLE_SIGN_IN_START: 'GOOGLE_SIGN_IN_START',
  EMAIL_SIGN_IN_START: 'EMAIL_SIGN_IN_START',
  SIGN_IN_SUCCESS: 'SIGN_IN_SUCCESS',
  SIGN_IN_FAILURE: 'SIGN_IN_FAILURE',
  CHECK_USER_SESSION: 'CHECK_USER_SESSION',
  SIGN_OUT_START: 'SIGN_OUT_START',
  SIGN_OUT_SUCCESS: 'SIGN_OUT_SUCCESS',
  SIGN_OUT_FAILURE: 'SIGN_OUT_FAILURE',
  REGISTER_START: 'REGISTER_START',
  REGISTER_SUCCESS: 'REGISTER_SUCCESS',
  REGISTER_FAILURE: 'REGISTER_FAILURE',
};

export interface UserActionProps {
  type: string;
  payload: firebase.firestore.DocumentData | undefined;
  emailAndPasswordPayload: EmailAndPassword;
  errorMessagePayload: string;
  registerPayload: RegisterInfos;
}

export interface EmailAndPassword {
  email: string;
  password: string;
}

export interface RegisterInfos {
  displayName: string;
  email: string;
  password: string;
}
