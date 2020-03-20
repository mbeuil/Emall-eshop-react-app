/** @format */

import { UserActionTypes, UserActionProps } from './user.types';
import * as T from '../../Types';

const INITIAL_STATE = {
  currentUser: undefined,
  errorMessage: '',
};

const userReducer = (
  state = INITIAL_STATE,
  action: UserActionProps,
): T.StateUserProps => {
  switch (action.type) {
    case UserActionTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        errorMessage: '',
      };
    case UserActionTypes.SIGN_IN_FAILURE:
    case UserActionTypes.SIGN_OUT_FAILURE:
    case UserActionTypes.REGISTER_FAILURE:
      return {
        ...state,
        errorMessage: action.errorMessagePayload,
      };
    case UserActionTypes.SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: undefined,
      };
    default:
      return state;
  }
};

export default userReducer;
