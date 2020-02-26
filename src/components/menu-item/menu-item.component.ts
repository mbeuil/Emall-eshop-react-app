/** @format */

import React from 'react';
import { withRouter } from 'react-router-dom';

import * as S from './menu-item.styles';

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => {
  const menuToShopPage = () => {
    history.push(`${match.url}${linkUrl}`);
  };

  return (
    <S.MenuItemContainer size={size} handleClick={menuToShopPage}>
      <S.BackgroundImageContainer
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <S.ContentContainer>
        <S.TitleContainer>{title.toUpperCase()}</S.TitleContainer>
        <S.SubtitleContainer>SHOP NOW</S.SubtitleContainer>
      </S.ContentContainer>
    </S.MenuItemContainer>
  );
};
export default withRouter(MenuItem);
