/** @format */

import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import CollectionItem from '../../components/collection-item/collection-item.component';
import { selectShopCollection } from '../../redux/shop/shop.selectors';

import * as S from './collection.styles';
import * as T from '../../Types';

interface RouteParams {
  collectionId: string;
}

const CollectionPage: React.FC = () => {
  const { collectionId } = useParams<RouteParams>();
  const collection: T.CollectionItemsProps | null = useSelector(
    selectShopCollection(collectionId),
  );

  if (collection) {
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
  }
  return <div />;
};

export default CollectionPage;
