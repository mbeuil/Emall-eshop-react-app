/** @format */

import { createSelector } from 'reselect';

import * as T from '../../Types';

const selectUser = (state: T.StateProps) => state.user;

export const selectCurrentUser = createSelector(
  [selectUser],
  (user) => user.currentUser,
);
