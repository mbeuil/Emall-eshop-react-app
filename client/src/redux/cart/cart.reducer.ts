/** @format */

import { CartActionProps, CartActionTypes } from './cart.types';
import { addItemToCart, removeItemToCart } from './cart.utils';
import * as T from '../../Types';

const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
};

const cartReducer = (
  state = INITIAL_STATE,
  action: CartActionProps,
): T.StateCartProps => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.addPayload),
      };
    case CartActionTypes.REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemToCart(state.cartItems, action.removePayload),
      };
    case CartActionTypes.DEL_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cartItem: T.CartItemProps) => cartItem.id !== action.delPayload.id,
        ),
      };
    case CartActionTypes.CLEAR_CART:
      return {
        ...state,
        cartItems: [],
      };
    default:
      return state;
  }
};

export default cartReducer;
