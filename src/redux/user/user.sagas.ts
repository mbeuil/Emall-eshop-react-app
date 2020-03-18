/** @format */

// node_modules
import { takeLatest, put, all, call } from 'redux-saga/effects';

// Reduc actions + types
import { UserActionTypes, UserActionProps } from './user.types';
import {
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  registerSuccess,
  registerFailure,
} from './user.actions';

// Firebase utils
import {
  auth,
  googleProvider,
  createUserProfileDocument,
  getCurrentUser,
} from '../../firebase/firebase.utils';

/**
 * getSnapshotFromUserAuth():
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
    yield put(signInFailure(error.message));
  }
}

function* onEmailSignInStart() {
  yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, signInWithEmail);
}

/**
 * Sign out asynchronous event handler
 */

function* signOut() {
  try {
    yield auth.signOut();
    yield put(signOutSuccess());
  } catch (error) {
    yield put(signOutFailure(error.message));
  }
}

function* onSignOutStart() {
  yield takeLatest(UserActionTypes.SIGN_OUT_START, signOut);
}

/**
 * Register asynchronous event handler
 */

function* register({
  registerPayload: { displayName, email, password },
}: UserActionProps) {
  try {
    const { user } = yield auth.createUserWithEmailAndPassword(email, password);
    yield put(registerSuccess());
    yield getSnapshotFromUserAuth({ ...user, displayName });
  } catch (error) {
    yield put(registerFailure(error.message));
  }
}

function* onRegisterStart() {
  yield takeLatest(UserActionTypes.REGISTER_START, register);
}

/**
 * User session peristence asynchronous event handler
 */

function* isUserAuthenticated() {
  try {
    const userAuth = yield getCurrentUser();
    if (!userAuth) yield;
    else {
      yield getSnapshotFromUserAuth(userAuth);
    }
  } catch (error) {
    yield put(signInFailure(error.message));
  }
}

function* onCheckUserSession() {
  yield takeLatest(UserActionTypes.CHECK_USER_SESSION, isUserAuthenticated);
}

/**
 * userSagas():
 * Run all of our user's start-sagas at once in one large saga
 */

function* userSagas() {
  yield all([
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(onCheckUserSession),
    call(onSignOutStart),
    call(onRegisterStart),
  ]);
}

export default userSagas;
