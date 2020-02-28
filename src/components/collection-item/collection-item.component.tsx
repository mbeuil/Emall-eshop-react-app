/** @format */

import React, { memo } from 'react';
import { useDispatch } from 'react-redux';

import { addItem } from '../../redux/cart/cart.actions';

import * as S from './collection-item.styles';

interface collectionItemProps {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
}

const CollectionItem: React.FC<collectionItemProps> = (collectionItem) => {
  const { name, price, imageUrl } = collectionItem;
  const dispatch = useDispatch();

  const handleClick = () => {
    return dispatch(addItem(collectionItem));
  };

  return (
    <S.CollectionItemContainer>
      <S.BackgroundImage style={{ backgroundImage: `url(${imageUrl})` }} />
      <S.ItemFooterContainer>
        <S.ItemName>{name}</S.ItemName>
        <S.ItemPrice>{price}</S.ItemPrice>
      </S.ItemFooterContainer>
      <S.AddToCartButton onClick={handleClick} isInverted>
        Add to cart
      </S.AddToCartButton>
    </S.CollectionItemContainer>
  );
};

export default memo(CollectionItem);
