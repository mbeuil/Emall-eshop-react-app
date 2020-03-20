/** @format */

// node_modules
import React, { memo } from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';

// Components
import CollectionItem from '../collection-item/collection-item.component';

// Styles + Types + Interfaces
import * as S from './collection-preview.styles';
import * as T from '../../Types';

interface CollectionPreviewProps {
  items: T.CollectionItemProps[];
  title: string;
  routeName: string;
}

const CollectionPreview: React.FC<CollectionPreviewProps> = ({
  title,
  items,
  routeName,
}) => {
  const history = useHistory();
  const match = useRouteMatch();

  const previewToShopPage = () => {
    history.push(`${match.path}/${routeName}`);
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
            <CollectionItem key={item.id} {...item} />
          ))}
      </S.CollectionItems>
    </S.CollectionPreviewContainer>
  );
};

export default memo(CollectionPreview);
