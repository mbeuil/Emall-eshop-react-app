/** @format */

import { UserActionTypes } from './user.types';

export const setCurrentUser = (user: firebase.User) => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user,
});
