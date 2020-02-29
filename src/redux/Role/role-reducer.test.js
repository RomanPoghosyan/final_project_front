import React from "react";
import roleReducer from "./role-reducer";
import {addPrivilegeToRole, addRoleSuccess, removePrivilegeFromRole, setBoardRoles, setPrivileges} from "./actions";

describe('role-reducer tests', () => {
    const initialState = {
        privileges: [{id: 1, title: null, name: "CREATE_TASK"}],
        roles: [{id: 1, name: "LEAD", type: "INITIAL", privilegesIds: [1]}],
    };

    test('initial state', () => {
        const action = {};
        const newState = roleReducer(initialState, action);
        expect(newState).toMatchObject(initialState);
    });

    test('SET_ROLES', () => {
        const mockData = {
            privileges: [{id: 1, title: null, name: "CREATE_TASK"}],
            roles: [{id: 1, name: "LEAD", type: "INITIAL", privilegesIds: [1]}]
        };
        const action = setBoardRoles([{id: 1, name: "LEAD", type: "INITIAL", privilegesIds: [1]}]);
        const newState = roleReducer(initialState, action);
        expect(newState).toMatchObject(mockData);
    });

    test('SET_PRIVILEGES', () => {
        const mockData = {
            privileges: [{id: 1, title: null, name: "CREATE_TASK"}],
            roles: [{id: 1, name: "LEAD", type: "INITIAL", privilegesIds: [1]}]
        };
        const action = setPrivileges([{id: 1, title: null, name: "CREATE_TASK"}]);
        const newState = roleReducer(initialState, action);
        expect(newState).toMatchObject(mockData);
    });

    test('ADD_ROLE_SUCCESS', () => {
        const mockData = {
            privileges: [{id: 1, title: null, name: "CREATE_TASK"}],
            roles: [
                {id: 1, name: "LEAD", type: "INITIAL"},
                {id: 2, name: "MEMBER", type: "INITIAL"},
            ]
        };
        const action = addRoleSuccess({id: 2, name: "MEMBER", type: "INITIAL"});
        const newState = roleReducer(initialState, action);
        expect(newState).toMatchObject(mockData);
    });

    test('ADD_PRIVILEGE_TO_ROLE', () => {
        const mockData = {
            privileges: [{id: 1, title: null, name: "CREATE_TASK"}],
            roles: [
                {id: 1, name: "LEAD", type: "INITIAL", privilegesIds: [2]},
            ]
        };
        const action = addPrivilegeToRole(1, [2]);
        const newState = roleReducer(initialState, action);
        expect(newState).toMatchObject(mockData);
    });

    test('REMOVE_PRIVILEGE_FROM_ROLE', () => {
        const mockData = {
            privileges: [{id: 1, title: null, name: "CREATE_TASK"}],
            roles: [
                {id: 1, name: "LEAD", type: "INITIAL", privilegesIds:[]},
            ]
        };
        const action = removePrivilegeFromRole(1, []);
        const newState = roleReducer(initialState, action);
        expect(newState).toMatchObject(mockData);
    })
});