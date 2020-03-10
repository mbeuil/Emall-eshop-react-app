/** @format */

import * as T from '../../Types';

export const ShopActionTypes = {
  FETCH_COLLECTIONS_START: 'FETCH_COLLECTIONS_START',
  FETCH_COLLECTIONS_SUCCESS: 'FETCH_COLLECTIONS_SUCCESS',
  FETCH_COLLECTIONS_FAILURE: 'FETCH_COLLECTIONS_FAILURE',
};

export interface ShopActionProps {
  type: string;
  collectionMapPayload: T.CollectionMapProps;
  errorMessagePayload: string;
}
