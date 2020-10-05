/** @format */

// node_modules
import React, { useEffect, memo, lazy } from 'react';
import { Route, useRouteMatch } from 'react-router-dom';
import { useDispatch } from 'react-redux';

// Redux dispatch + selector
import { fetchCollectionsStart } from '../../redux/shop/shop.actions';

// Lazy loaded components
const CollectionOverview = lazy(() =>
  import('../../components/collection-overview/collection-overview.component'),
);
const CollectionSection = lazy(() =>
  import('../../components/collection-section/collection-section.component'),
);

const ShopPage = () => {
  const match = useRouteMatch();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCollectionsStart());
  }, [dispatch]);

  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionOverview} />
      <Route
        path={`${match.path}/:collectionId`}
        component={CollectionSection}
      />
    </div>
  );
};

export default memo(ShopPage);
