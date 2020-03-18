/** @format */

// node_modules
import { takeLatest, call, put } from 'redux-saga/effects';

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

export function* fetchCollectionsStart() {
  yield takeLatest(
    ShopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync,
  );
}
