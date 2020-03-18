/** @format */

// node_modules
import { takeLatest, call, all, put } from 'redux-saga/effects';

// Reduc actions + types
import { ShopActionTypes } from './shop.types';
import {
  fetchCollectionsSuccess,
  fetchCollectionsFailure,
} from './shop.actions';

// Firebase utils
import {
  firestore,
  convertCollectionSnapshotToMap,
} from '../../firebase/firebase.utils';

/**
 * fetch collection asynchronous event handler
 */

function* fetchCollectionsAsync() {
  try {
    const collectionRef = firestore.collection('collections');
    const snapshot = yield collectionRef.get();
    const collectionMap = yield call(convertCollectionSnapshotToMap, snapshot);
    yield put(fetchCollectionsSuccess(collectionMap));
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message));
  }
}

function* fetchCollectionsStart() {
  yield takeLatest(
    ShopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync,
  );
}

/**
 * shopSagas():
 * Run all of our shop's start-sagas at once in one large saga
 */

function* shopSagas() {
  yield all([call(fetchCollectionsStart)]);
}

export default shopSagas;
