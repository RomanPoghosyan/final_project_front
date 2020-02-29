import React from "react";
import userReducer from "./user-reducer";
import {changeUserRoleSuccess, setBoardUsers, setSearchedUsers, setUserData} from "./actions";

describe('testing user-reducer', () => {
    const initialState = {
        searchedUsers: [],
        boardUsers: [{id: 1, username: 'username', first_name: 'John', roleId: 1}],
        currentUser: {
            id: null,
            email: null,
            username: null,
            first_name: null,
            last_name: null,
            location: null,
            created_at: null,
            updated_at: null,
            phone_number: null,
            isAuth: false,
        }
    };

    test('return initial state', () => {
        let action = {};
        let newState = userReducer(initialState, action);
        expect(newState).toMatchObject(initialState);
    });

    test('SET_USER_FULL_DATA', () => {
        const mockData = {
            searchedUsers: [],
            boardUsers: [{id: 1, username: 'username', first_name: 'John', roleId: 1}],
            currentUser: {
                id: 1,
                email: 'user@user.net',
                username: 'username',
                first_name: 'John',
                last_name: 'Doe',
                location: 'Armenia',
                created_at: '20/02/2020',
                updated_at: '21/02/2020',
                phone_number: '+37477401271',
                isAuth: true,
            }
        };
        let action = setUserData(1,
            'user@user.net',
            'username',
            'John',
            'Doe',
            'Armenia',
            '20/02/2020',
            '21/02/2020',
            '+37477401271',
            true);
        let newState = userReducer(initialState, action);
        expect(newState).toMatchObject(mockData);
    });

    test('SET_SEARCHED_USERS', () => {
        const mockData = {
            searchedUsers: [{id: 1, username: 'username', first_name: 'John',}],
            boardUsers: [{id: 1, username: 'username', first_name: 'John', roleId: 1}],
            currentUser: {
                id: null,
                email: null,
                username: null,
                first_name: null,
                last_name: null,
                location: null,
                created_at: null,
                updated_at: null,
                phone_number: null,
                isAuth: false,
            }
        };
        let action = setSearchedUsers([{id: 1, username: 'username', first_name: 'John'}]);
        let newState = userReducer(initialState, action);
        expect(newState).toMatchObject(mockData);
    });

    test('SET_BOARD_USERS', () => {
        const mockData = {
            searchedUsers: [],
            boardUsers: [
                {id: 1, username: 'username', first_name: 'John'},
                {id: 2, username: 'username2', first_name: 'James'}
            ],
            currentUser: {
                id: null,
                email: null,
                username: null,
                first_name: null,
                last_name: null,
                location: null,
                created_at: null,
                updated_at: null,
                phone_number: null,
                isAuth: false,
            }
        };
        let action = setBoardUsers([
            {id: 1, username: 'username', first_name: 'John'},
            {id: 2, username: 'username2', first_name: 'James'}
        ]);
        let newState = userReducer(initialState, action);
        expect(newState).toMatchObject(mockData);
    });

    test('CHANGE_USER_ROLE_SUCCESS', () => {
        const mockData = {
            searchedUsers: [],
            boardUsers: [
                {id: 1, username: 'username', first_name: 'John', roleId: 2}
            ],
            currentUser: {
                id: null,
                email: null,
                username: null,
                first_name: null,
                last_name: null,
                location: null,
                created_at: null,
                updated_at: null,
                phone_number: null,
                isAuth: false,
            }
        };
        let action = changeUserRoleSuccess(1, 1, 2);
        let newState = userReducer(initialState, action);
        expect(newState).toMatchObject(mockData);
    })
});