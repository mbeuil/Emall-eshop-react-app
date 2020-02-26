/** @format */

import React from 'react';
import { useSelector } from 'react-redux';

import CollectionPreview from '../collection-preview/collection-preview.component';
import { selectShopCollectionsForPreview } from '../../redux/shop/shop.selectors';

import * as S from './collection-overview.styles';

const CollectionOverview = () => {
  const collections = useSelector(selectShopCollectionsForPreview);

  return (
    <S.CollectionsOverviewContainer>
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </S.CollectionsOverviewContainer>
  );
};

export default CollectionOverview;
