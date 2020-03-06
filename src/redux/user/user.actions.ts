/** @format */

import { UserActionTypes } from './user.types';

export const setCurrentUser = (
  user: firebase.firestore.DocumentData | undefined,
) => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user,
});
