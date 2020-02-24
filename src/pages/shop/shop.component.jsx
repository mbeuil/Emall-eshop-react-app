/** @format */

import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import LoadingSpinner from '../../components/loading-spinner/loading-spinner.component';
import CollectionOverview from '../../components/collection-overview/collection-overview.component';
import CollectionPage from '../collection/collection.component';
import { updateCollections } from '../../redux/shop/shop.actions';

import {
  firestore,
  convertCollectionSnapshotToMap,
} from '../../firebase/firebase.utils';

const CollectionOverviewLoading = LoadingSpinner(CollectionOverview);
const CollectionPageLoading = LoadingSpinner(CollectionPage);

const ShopPage = ({ match }) => {
  const [loading, setLoading] = useState(true);

  const collectionRef = firestore.collection('collections');
  const dispatch = useDispatch();

  useEffect(() => {
    collectionRef.onSnapshot(async (snapshot) => {
      const collectionMap = convertCollectionSnapshotToMap(snapshot);

      dispatch(updateCollections(collectionMap));
      setLoading(false);
    });
  });

  return (
    <div className="shop-page">
      <Route
        exact
        path={`${match.path}`}
        render={(props) => (
          <CollectionOverviewLoading isLoading={loading} {...props} />
        )}
      />
      <Route
        path={`${match.path}/:collectionId`}
        render={(props) => (
          <CollectionPageLoading isLoading={loading} {...props} />
        )}
      />
    </div>
  );
};

export default ShopPage;
