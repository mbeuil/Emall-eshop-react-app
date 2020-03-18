/** @format */

import { UserActionTypes } from './user.types';

import * as T from './user.types';

/**
 * Google / Email sign in actions:
 */

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

/**
 * User session persistent action:
 */

export const checkUserSession = () => ({
  type: UserActionTypes.CHECK_USER_SESSION,
});

/**
 * Sign out actions:
 */

export const signOutStart = () => ({
  type: UserActionTypes.SIGN_OUT_START,
});

export const signOutSuccess = () => ({
  type: UserActionTypes.SIGN_OUT_SUCCESS,
});

export const signOutFailure = (errorMessage: string) => ({
  type: UserActionTypes.SIGN_OUT_FAILURE,
  errorMessagePayload: errorMessage,
});
