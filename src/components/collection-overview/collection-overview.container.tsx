/** @format */

import { connect, useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { selectIsCollectionFetching } from '../../redux/shop/shop.selectors';
import WithLoading from '../with-loading/with-loading.component';
import CollectionOverview from '../collection-overview/collection-overview.component';

const isLoading = useSelector(selectIsCollectionFetching);

export const collectionOverviewContainer = compose(WithLoading)(
  CollectionOverview,
);
