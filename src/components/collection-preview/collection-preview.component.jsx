/** @format */

import React, { memo } from 'react';

import CollectionItem from '../collection-item/collection-item.component';

import * as S from './collection-preview.styles';

const CollectionPreview = ({ title, items }) => {
  return (
    <S.CollectionPreviewContainer>
      <S.CollectionTitle>{title.toUpperCase()}</S.CollectionTitle>
      <S.CollectionItems>
        {items
          .filter((item, index) => index < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </S.CollectionItems>
    </S.CollectionPreviewContainer>
  );
};

export default memo(CollectionPreview);
