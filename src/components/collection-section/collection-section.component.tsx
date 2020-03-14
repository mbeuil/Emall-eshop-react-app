/** @format */

import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import CollectionItem from '../collection-item/collection-item.component';
import LoadingSpinner from '../loading-spinner/loading-spinner.component';
import {
  selectShopCollection,
  selectIsCollectionFetching,
} from '../../redux/shop/shop.selectors';

import * as S from './collection-section.styles';
import * as T from '../../Types';

interface RouteParams {
  collectionId: string;
}

const CollectionSection: React.FC = () => {
  const { collectionId } = useParams<RouteParams>();
  const isFetching = useSelector(selectIsCollectionFetching);
  const collection: T.CollectionItemsProps | null = useSelector(
    selectShopCollection(collectionId),
  );

  if (!collection || isFetching) {
    return <LoadingSpinner />;
  }

  const { title, items } = collection;

  return (
    <S.CollectionPageContainer>
      <S.CollectionTitle>{title}</S.CollectionTitle>
      <S.CollectionItems>
        {items.map((item: T.CollectionItemProps) => (
          <CollectionItem key={item.id} {...item} />
        ))}
      </S.CollectionItems>
    </S.CollectionPageContainer>
  );
};

export default CollectionSection;
