/** @format */

import { ShopActionTypes } from './shop.types';

import {
  firestore,
  convertCollectionSnapshotToMap,
} from '../../firebase/firebase.utils';

import * as T from '../../Types';

export const fetchCollectionsStart = () => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_START,
});

export const fetchCollectionsSuccess = (
  collectionMap: T.CollectionMapProps,
) => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  collectionMapPayload: collectionMap,
});

export const fetchCollectionsFailure = (errorMessage: string) => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
  errorMessagePayload: errorMessage,
});

export const fetchCollectionsStartAsync = () => {
  return (dispatch: any) => {
    const collectionRef = firestore.collection('collections');

    dispatch(fetchCollectionsStart());
    collectionRef
      .get()
      .then((snapshot) => {
        const collectionMap = convertCollectionSnapshotToMap(snapshot);

        dispatch(fetchCollectionsSuccess(collectionMap));
      })
      .catch((error) => fetchCollectionsFailure(error.message));
  };
};
