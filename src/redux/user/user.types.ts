/** @format */

export const UserActionTypes = {
  SET_CURRENT_USER: 'SET_CURRENT_USER',
};

export interface UserActionProps {
  type: string;
  payload: firebase.User;
}
