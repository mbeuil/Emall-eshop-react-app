/** @format */

import { all, call, takeLatest, put } from 'redux-saga/effects';

import { UserActionTypes } from '../user/user.types';

import { clearCart } from './cart.actions';

/**
 * Clear cart asynchronous event handler
 */

function* clearCartOnSignOut() {
  yield put(clearCart());
}

function* onSignOutSuccess() {
  yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut);
}

/**
 * cartSagas():
 * Run all of our cart's start-sagas at once in one large saga
 */

function* cartSagas() {
  yield all([call(onSignOutSuccess)]);
}

export default cartSagas;
