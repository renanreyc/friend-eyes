import { ADD_PARTICIPANT, REMOVE_PARTICIPANT, SET_USER, SET_USERSTREAM } from "./actiontypes";

export const setUserStream = (stream) => {
    return {
        type: SET_USERSTREAM,
        payload: {
            mainStream: stream,
        },
    };
};

export const setUser = (user) => {
    return {
        type: SET_USER,
        payload: {
            currentUser: user,
        },
    };
};

export const addParticipant = (participant) => {
    return {
        type: ADD_PARTICIPANT,
        payload: {
            participant,
        },
    };
};

export const removeParticipant = (participantKey) => {
    return {
        type: REMOVE_PARTICIPANT,
        payload: {
            participantKey
        },
    };
};