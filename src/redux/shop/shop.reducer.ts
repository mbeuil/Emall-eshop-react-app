/** @format */

import { ShopActionTypes, ShopActionProps } from './shop.types';
import * as T from '../../Types';

const INITIAL_STATE = {
  collections: {},
  isFetching: false,
  errorMessage: '',
};

const shopReducer = (
  state = INITIAL_STATE,
  action: ShopActionProps,
): T.StateShopProps => {
  switch (action.type) {
    case ShopActionTypes.FETCH_COLLECTIONS_START:
      return {
        ...state,
        isFetching: true,
      };
    case ShopActionTypes.FETCH_COLLECTIONS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        collections: action.collectionMapPayload,
        errorMessage: '',
      };
    case ShopActionTypes.FETCH_COLLECTIONS_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.errorMessagePayload,
      };
    default:
      return state;
  }
};

export default shopReducer;
