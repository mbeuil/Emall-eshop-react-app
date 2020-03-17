/** @format */

import { UserActionTypes } from './user.types';

import * as T from './user.types';

export const googleSignInStart = () => ({
  type: UserActionTypes.GOOGLE_SIGN_IN_START,
});

export const emailSignInStart = (emailAndPassword: T.EmailAndPassword) => ({
  type: UserActionTypes.EMAIL_SIGN_IN_START,
  emailAndPasswordPayload: emailAndPassword,
});

export const signInSuccess = (
  user: firebase.firestore.DocumentData | undefined,
) => ({
  type: UserActionTypes.SIGN_IN_SUCCESS,
  payload: user,
});

export const signInFailure = (errorMessage: string) => ({
  type: UserActionTypes.SIGN_IN_FAILURE,
  errorMessagePayload: errorMessage,
});
