/** @format */

import { createSelector } from 'reselect';
import * as T from '../../Types';

const selectShop = (state: T.StateProps) => state.shop;

export const selectShopCollections = createSelector(
  [selectShop],
  (state) => state.collections,
);

export const selectShopCollectionsForPreview = createSelector(
  [selectShopCollections],
  (collections) =>
    collections ? Object.keys(collections).map((key) => collections[key]) : [],
);

export const selectShopCollection = (collectionUrlParam: string) =>
  createSelector([selectShopCollections], (collections) =>
    collections ? collections[collectionUrlParam] : null,
  );

export const selectIsCollectionFetching = createSelector(
  [selectShop],
  (state) => state.isFetching,
);
