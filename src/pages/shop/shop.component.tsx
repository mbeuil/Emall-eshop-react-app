/** @format */

// node_modules
import React, { useEffect, memo } from 'react';
import { Route, useRouteMatch } from 'react-router-dom';
import { useDispatch } from 'react-redux';

// Local modules
import CollectionOverview from '../../components/collection-overview/collection-overview.component';
import CollectionPage from '../../components/collection-section/collection-section.component';

// Styles + Types + Interfaces
import { fetchCollectionsStart } from '../../redux/shop/shop.actions';

const ShopPage = () => {
  const match = useRouteMatch();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCollectionsStart());
  }, [dispatch]);

  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
  );
};

export default memo(ShopPage);
