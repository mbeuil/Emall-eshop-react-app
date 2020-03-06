/** @format */

import { UserActionTypes, UserActionProps } from './user.types';
import * as T from '../../Types';

const INITIAL_STATE = {
  currentUser: undefined,
};

const userReducer = (
  state = INITIAL_STATE,
  action: UserActionProps,
): T.StateUserProps => {
  switch (action.type) {
    case UserActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
