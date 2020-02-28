/** @format */

import React from 'react';
import { useSelector } from 'react-redux';

import CollectionPreview from '../collection-preview/collection-preview.component';
import { selectShopCollectionsForPreview } from '../../redux/shop/shop.selectors';

import * as S from './collection-overview.styles';

interface collectionItemProps {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
}

interface collectionItemsProps {
  id: string;
  items: collectionItemProps[];
  title: string;
  routeName: string;
}

const CollectionOverview: React.FC = () => {
  const collections: collectionItemsProps[] = useSelector(
    selectShopCollectionsForPreview,
  );

  return (
    <S.CollectionsOverviewContainer>
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </S.CollectionsOverviewContainer>
  );
};

export default CollectionOverview;
