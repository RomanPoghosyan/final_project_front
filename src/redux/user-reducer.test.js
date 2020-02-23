import React from "react";
import userReducer, {setSearchedUsers, setUserData} from "./user-reducer";

describe('testing user-reducer', () => {
    const initialState = {
        searchedUsers: [],
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
        let newState = userReducer(initialState.currentUser, action);
        expect(newState).toMatchObject(mockData);
    });

    test('SET_SEARCHED_USERS', () => {
        const mockData = {searchedUsers: [{id: 1, username: 'username', first_name: 'John',}]};
        let action = setSearchedUsers([{id: 1, username: 'username', first_name: 'John'}]);
        let newState = userReducer(initialState.searchedUsers, action);
        expect(newState).toMatchObject(mockData);
    })
});