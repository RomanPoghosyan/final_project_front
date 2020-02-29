import React from "react";
import {notificationReducer} from "./notification-reducer";
import {setInvitationStatus, setNotifications, setNotificationStatusSuccess} from "./actions";

describe('notification-reducer tests', () => {
    const initialState = [
        {
            id: 1,
            status: "NOT_SEEN",
            type: "INVITATION",
            notifiedByFirstName: "roman",
            notifiedByLastName: "roman",
            projectName: "First Project",
            taskTitle: null,
            invitationStatus: "PENDING"
        }
    ];

    test('return initial state', () => {
        const action = {};
        const newState = notificationReducer(initialState, action);
        expect(newState).toMatchObject(initialState);
    });

    test('SET_NOTIFICATIONS', () => {
        const mockData = [{
            id: 2,
            status: "SEEN",
            type: "INVITATION",
            notifiedByFirstName: "John",
            notifiedByLastName: "Doe",
            projectName: "First Project",
            taskTitle: null,
            invitationStatus: "PENDING"
        }];
        const action = setNotifications([{
            id: 2,
            status: "SEEN",
            type: "INVITATION",
            notifiedByFirstName: "John",
            notifiedByLastName: "Doe",
            projectName: "First Project",
            taskTitle: null,
            invitationStatus: "PENDING"
        }]);
        const newState = notificationReducer(initialState, action);
        expect(newState).toMatchObject(mockData);

    });

    test('SET_NOTIFICATION_STATUS_SUCCESS', () => {
        const mockData = [{
            id: 1,
            status: "SEEN",
            type: "INVITATION",
            notifiedByFirstName: "roman",
            notifiedByLastName: "roman",
            projectName: "First Project",
            taskTitle: null,
            invitationStatus: "PENDING"
        }];
        const action = setNotificationStatusSuccess(1, "SEEN");
        const newState = notificationReducer(initialState, action);
        expect(newState).toMatchObject(mockData);
    });

    test('SET_INVITATION_SUCCESS', () => {
        const mockData = [{
            id: 1,
            status: "SEEN",
            type: "INVITATION",
            notifiedByFirstName: "roman",
            notifiedByLastName: "roman",
            projectName: "First Project",
            taskTitle: null,
            invitationStatus: "ACCEPTED"
        }];
        const action = setInvitationStatus(1, "ACCEPTED","SEEN");
        const newState = notificationReducer(initialState, action);
        expect(newState).toMatchObject(mockData);
    })
});