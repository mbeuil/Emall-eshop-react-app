/** @format */

// node_modules
import React, { memo } from 'react';
import { useDispatch } from 'react-redux';

// Redux dispatch + selector
import { addItem } from '../../redux/cart/cart.actions';

// Styles + Types + Interfaces
import * as S from './collection-item.styles';
import * as T from '../../Types';

const CollectionItem: React.FC<T.CollectionItemProps> = (collectionItem) => {
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
        <S.ItemPrice>{price}$</S.ItemPrice>
      </S.ItemFooterContainer>
      <S.AddToCartButton onClick={handleClick} isInverted>
        Add to cart
      </S.AddToCartButton>
    </S.CollectionItemContainer>
  );
};

export default memo(CollectionItem);
