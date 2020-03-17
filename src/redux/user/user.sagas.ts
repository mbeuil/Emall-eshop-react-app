/** @format */

import { takeLatest, put, all, call } from 'redux-saga/effects';

import { UserActionTypes, UserActionProps } from './user.types';
import { signInSuccess, signInFailure } from './user.actions';
import {
  auth,
  googleProvider,
  createUserProfileDocument,
} from '../../firebase/firebase.utils';

/**
 * getSnapshotFromUserAuth:
 *
 * Get the user reference object from createUserProfileDocument() using userAuth.
 * Then store the query snapshot into the redux state.
 *
 * @param userAuth
 */

function* getSnapshotFromUserAuth(userAuth: firebase.User) {
  try {
    const userRef = yield call(createUserProfileDocument, userAuth);
    const userSnapshot = yield userRef.get();
    yield put(signInSuccess(userSnapshot.data()));
  } catch (error) {
    yield put(signInFailure(error.message));
  }
}

/**
 * GoogleSignIn asynchronous event handler
 */

function* signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    yield getSnapshotFromUserAuth(user);
  } catch (error) {
    yield put(signInFailure(error.message));
  }
}

function* onGoogleSignInStart() {
  yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

/**
 * EmailSignIn asynchronous event handler
 */

function* signInWithEmail({
  emailAndPasswordPayload: { email, password },
}: UserActionProps) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    yield getSnapshotFromUserAuth(user);
  } catch (error) {
    put(signInFailure(error.message));
  }
}

function* onEmailSignInStart() {
  yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, signInWithEmail);
}

/**
 * userSagas
 * Run all of our user's start-sagas at once in one large saga
 */

export function* userSagas() {
  yield all([call(onGoogleSignInStart), call(onEmailSignInStart)]);
}
