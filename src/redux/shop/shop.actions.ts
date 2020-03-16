/** @format */

import { ShopActionTypes } from './shop.types';

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
