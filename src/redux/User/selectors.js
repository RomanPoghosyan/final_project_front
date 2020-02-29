import {createSelector} from "reselect";

export const getIsAuthSelect = state => state.user.currentUser.isAuth;

export const getBoardUsersSelect = state => state.user.boardUsers;

export const getUserSelect = userId => createSelector(getBoardUsersSelect, (users) => users.find(u => u.id === userId));
