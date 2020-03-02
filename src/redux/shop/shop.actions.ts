/** @format */

import { ShopActionTypes } from './shop.types';
import * as T from '../../Types';

export const updateCollections = (collectionMap: T.CollectionMapProps[]) => ({
  type: ShopActionTypes.UPDATE_COLLECTIONS,
  payload: collectionMap,
});
