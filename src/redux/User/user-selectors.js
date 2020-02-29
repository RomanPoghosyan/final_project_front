import {createSelector} from "reselect";

export const getCurrentUser = state => state.user.currentUser;

export const getIsAuth = createSelector(getCurrentUser, user => user.isAuth);

export const getFullName = createSelector(getCurrentUser, user => {
    return [user.first_name, user.last_name];
});