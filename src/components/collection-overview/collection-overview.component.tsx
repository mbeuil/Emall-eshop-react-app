/** @format */

import React from 'react';
import { useSelector } from 'react-redux';

import CollectionPreview from '../collection-preview/collection-preview.component';
import LoadingSpinner from '../loading-spinner/loading-spinner.component';
import {
  selectShopCollectionsForPreview,
  selectIsCollectionFetching,
} from '../../redux/shop/shop.selectors';

import * as S from './collection-overview.styles';
import * as T from '../../Types';

const CollectionOverview: React.FC = () => {
  const isFetching = useSelector(selectIsCollectionFetching);
  const collections: T.CollectionItemsProps[] = useSelector(
    selectShopCollectionsForPreview,
  );

  if (isFetching) {
    return <LoadingSpinner />;
  }

  return (
    <S.CollectionsOverviewContainer>
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </S.CollectionsOverviewContainer>
  );
};

export default CollectionOverview;
