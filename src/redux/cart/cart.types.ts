/** @format */

import * as T from '../../Types/types';

export const CartActionTypes = {
  TOGGLE_CART_HIDDEN: 'TOGGLE_CART_HIDDEN',
  ADD_ITEM: 'ADD_ITEM',
  REMOVE_ITEM: 'REMOVE_ITEM',
  DEL_FROM_CART: 'DEL_FROM_CART',
};

export interface ItemToAddProps {
  id: number;
  imageUrl: string;
  name: string;
  price: number;
  quantity?: number;
}

// interface ToggleHiddenActionProps {
//   type: string;
// }

// interface AddItemActionProps {
//   type: string;
//   addPayload: ItemToAddProps;
// }

// interface RemoveItemActionProps {
//   type: string;
//   removePayload: ItemToAddProps;
// }

// interface DeleItemActionProps {
//   type: string;
//   delPayload: ItemToAddProps;
// }

// export type CartActionProps =
//   | ToggleHiddenActionProps
//   | AddItemActionProps
//   | RemoveItemActionProps
//   | DeleItemActionProps;

export interface CartActionProps {
  type: string;
  addPayload: ItemToAddProps;
  removePayload: T.CartItemProps;
  delPayload: T.CartItemProps;
}
