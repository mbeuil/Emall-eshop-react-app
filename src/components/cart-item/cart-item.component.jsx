import React from 'react';

import './cart-item.style.css';

const CartItem = ({ item: { imageUrl, name, price, quantity } }) => {
  console.log(imageUrl, name, price, quantity);
  const string1 = ' x $';

  return (
    <div className="cart-item">
      <img src={imageUrl} alt="item" />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">
          {quantity}
          {string1}
          {price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
