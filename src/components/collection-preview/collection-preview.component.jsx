/** @format */

import React, { memo } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import CollectionItem from '../collection-item/collection-item.component';

import * as S from './collection-preview.styles';

const CollectionPreview = ({ title, items, routeName }) => {
  const history = useHistory();
  const location = useLocation();

  const previewToShopPage = () => {
    history.push(`${location.pathname}/${routeName}`);
  };

  return (
    <S.CollectionPreviewContainer>
      <S.CollectionTitle>
        <S.TitleContainer
          onClick={previewToShopPage}
          onKeyDown={previewToShopPage}
          role="button"
          tabIndex={0}
        >
          {title.toUpperCase()}
        </S.TitleContainer>
      </S.CollectionTitle>
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
