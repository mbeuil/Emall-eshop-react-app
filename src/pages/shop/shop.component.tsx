/** @format */

import React, { useEffect, memo } from 'react';
import { Route, useRouteMatch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import WithLoading from '../../components/with-loading/with-loading.component';
import CollectionOverview from '../../components/collection-overview/collection-overview.component';
import CollectionPage from '../collection/collection.component';

import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';
import { selectIsCollectionFetching } from '../../redux/shop/shop.selectors';

const CollectionOverviewLoading = WithLoading(CollectionOverview);
const CollectionPageLoading = WithLoading(CollectionPage);

const ShopPage = () => {
  const match = useRouteMatch();
  const dispatch = useDispatch();
  const isFetching: boolean = useSelector(selectIsCollectionFetching);

  useEffect(() => {
    dispatch(fetchCollectionsStartAsync());
  }, [dispatch]);

  return (
    <div className="shop-page">
      <Route
        exact
        path={`${match.path}`}
        render={(props) => (
          <CollectionOverviewLoading isLoading={isFetching} {...props} />
        )}
      />
      <Route
        path={`${match.path}/:collectionId`}
        render={(props) => (
          <CollectionPageLoading isLoading={isFetching} {...props} />
        )}
      />
    </div>
  );
};

export default memo(ShopPage);
