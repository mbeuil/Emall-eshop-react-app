/** @format */

import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import * as S from './menu-item.styles';

interface sectionProps {
  title: string;
  imageUrl: string;
  linkUrl: string;
  size?: string;
}

const MenuItem: React.FC<sectionProps> = ({
  title,
  imageUrl,
  size,
  linkUrl,
}) => {
  const history = useHistory();
  const location = useLocation();
  const menuToShopPage = () => {
    history.push(`${location.pathname}/${linkUrl}`);
  };

  return (
    <S.MenuItemContainer
      size={size}
      onClick={menuToShopPage}
      onKeyDown={menuToShopPage}
      role="button"
      tabIndex={0}
    >
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
export default MenuItem;
