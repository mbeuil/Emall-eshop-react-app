/** @format */

import * as T from '../../Types';
import { ItemToAddProps } from './cart.types';

export const addItemToCart = (
  cartItems: T.CartItemProps[],
  ItemToAdd: ItemToAddProps,
) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === ItemToAdd.id,
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === ItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem,
    );
  }

  return [...cartItems, { ...ItemToAdd, quantity: 1 }];
};

export const removeItemToCart = (
  cartItems: T.CartItemProps[],
  cartItemToRemove: T.CartItemProps,
) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id,
  );

  if (existingCartItem) {
    if (existingCartItem.quantity === 1) {
      return cartItems.filter(
        (cartItem) => cartItem.id !== cartItemToRemove.id,
      );
    }
  }

  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem,
  );
};
