import React from 'react';
import { withRouter } from 'react-router-dom';

import ClickableIcon from '../clickable-icon/clickable-icon.component';

import './menu-item.style.css';

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => {
  const menuToShopPage = () => {
    history.push(`${match.url}${linkUrl}`);
  };

  return (
    <ClickableIcon className={`${size} menu-item`} handleClick={menuToShopPage}>
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </ClickableIcon>
  );
};
export default withRouter(MenuItem);
