/** @format */

import * as T from '../../Types';

export const CartActionTypes = {
  TOGGLE_CART_HIDDEN: 'TOGGLE_CART_HIDDEN',
  ADD_ITEM: 'ADD_ITEM',
  REMOVE_ITEM: 'REMOVE_ITEM',
  DEL_FROM_CART: 'DEL_FROM_CART',
  CLEAR_CART: 'CLEAR_CART',
};

export interface ItemToAddProps {
  id: number;
  imageUrl: string;
  name: string;
  price: number;
  quantity?: number;
}

export interface CartActionProps {
  type: string;
  addPayload: ItemToAddProps;
  removePayload: T.CartItemProps;
  delPayload: T.CartItemProps;
}
