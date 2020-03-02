/** @format */

import * as T from '../../Types';

export const ShopActionTypes = {
  UPDATE_COLLECTIONS: 'UPDATE_COLLECTIONS',
};

export interface ShopActionProps {
  type: string;
  payload: T.CollectionMapProps;
}
