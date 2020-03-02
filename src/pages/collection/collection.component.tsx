/** @format */

import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import CollectionItem from '../../components/collection-item/collection-item.component';
import { selectShopCollection } from '../../redux/shop/shop.selectors';

import * as S from './collection.styles';

interface RouteParams {
  collectionId: string;
}

interface collectionItemProps {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
}

const CollectionPage: React.FC = () => {
  const { collectionId } = useParams<RouteParams>();
  const { title, items } = useSelector(selectShopCollection(collectionId));

  return (
    <S.CollectionPageContainer>
      <S.CollectionTitle>{title}</S.CollectionTitle>
      <S.CollectionItems>
        {items.map((item: collectionItemProps) => (
          <CollectionItem key={item.id} {...item} />
        ))}
      </S.CollectionItems>
    </S.CollectionPageContainer>
  );
};

export default CollectionPage;
