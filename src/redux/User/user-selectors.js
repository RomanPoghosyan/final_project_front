import {createSelector} from "reselect";

export const getCurrentUser = state => state.user.currentUser;

export const getIsAuth = createSelector(getCurrentUser, user => user.isAuth);

export const getFullName = createSelector(getCurrentUser, user => {
    return [user.first_name, user.last_name];
});
export const getIsAuthSelect = state => state.user.currentUser.isAuth;
export const getBoardUsersSelect = state => state.user.boardUsers;
export const getUserSelect = userId => createSelector([getBoardUsersSelect, () => userId], (users, uId) => users.find(u => u.id === uId));
export const getUserId = state => state.user.currentUser.id;
export const getCurrentFbTokenSelect = state => state.user.currentUser.fbToken;