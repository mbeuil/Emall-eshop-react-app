/** @format */

import React from 'react';
import { useHistory, useLocation, useRouteMatch } from 'react-router-dom';

import * as S from './menu-item.styles';

interface MenuItemProps {
  title: string;
  imageUrl: string;
  linkUrl: string;
  size?: string;
}

const MenuItem: React.FC<MenuItemProps> = ({
  title,
  imageUrl,
  size,
  linkUrl,
}) => {
  const history = useHistory();
  const location = useLocation();
  const match = useRouteMatch();

  console.log('history', history);
  console.log('location', location.pathname);
  console.log('match', match.path);

  const menuToShopPage = () => {
    history.push(`${match.path}/${linkUrl}`);
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
