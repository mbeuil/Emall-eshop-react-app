/** @format */

import { CartActionTypes, ItemToAddProps } from './cart.types';
import * as T from '../../Types/types';

export const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN,
});

export const addItem = (item: ItemToAddProps) => ({
  type: CartActionTypes.ADD_ITEM,
  addPayload: item,
});

export const removeItem = (item: T.CartItemProps) => ({
  type: CartActionTypes.REMOVE_ITEM,
  removePayload: item,
});

export const delFromCart = (item: T.CartItemProps) => ({
  type: CartActionTypes.DEL_FROM_CART,
  delPayload: item,
});
