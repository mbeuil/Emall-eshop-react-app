/** @format */

import React from 'react';
import { useSelector } from 'react-redux';

import CollectionItem from '../../components/collection-item/collection-item.component';
import { selectShopCollection } from '../../redux/shop/shop.selectors';

import * as S from './collection.styles';

const CollectionPage = ({ match }) => {
  const { title, items } = useSelector(
    selectShopCollection(match.params.collectionId),
  );

  return (
    <S.CollectionPageContainer>
      <S.CollectionTitle>{title}</S.CollectionTitle>
      <S.CollectionItems>
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </S.CollectionItems>
    </S.CollectionPageContainer>
  );
};

export default CollectionPage;
