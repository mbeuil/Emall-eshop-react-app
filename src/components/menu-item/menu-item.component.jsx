import React from 'react';
import { withRouter } from 'react-router-dom';

import './menu-item.style.css';

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => {
  const menuToShopPage = () => {
    history.push(`${match.url}${linkUrl}`);
  };

  return (
    <div
      className={`${size} menu-item`}
      onClick={menuToShopPage}
      onKeyDown={menuToShopPage}
      role="button"
      tabIndex={0}
    >
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
    </div>
  );
};
export default withRouter(MenuItem);
