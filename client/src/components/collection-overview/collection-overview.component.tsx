/** @format */

// node_modules
import React from 'react';
import { useSelector } from 'react-redux';

// Components
import CollectionPreview from '../collection-preview/collection-preview.component';
import LoadingSpinner from '../loading-spinner/loading-spinner.component';

// Redux dispatch + selector
import {
  selectShopCollectionsForPreview,
  selectIsCollectionFetching,
} from '../../redux/shop/shop.selectors';

// Styles + Types + Interfaces
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
