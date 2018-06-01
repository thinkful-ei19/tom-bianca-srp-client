import {
    FETCH_PROTECTED_DATA_SUCCESS,
    FETCH_PROTECTED_DATA_ERROR,
    SUBMITTED_ANSWER,
    CLEAR_RESPONSE,
    FETCH_DRAGONS_SUCCESS
} from '../actions/protected-data';

const initialState = {
    data: [],
    error: null,
    response: false,
    dragons: 0,
};

export default function reducer(state = initialState, action) {
    if (action.type === FETCH_PROTECTED_DATA_SUCCESS) {
        return Object.assign({}, state, {
            data: action.data,
            error: null,
        });
    } else if (action.type === FETCH_PROTECTED_DATA_ERROR) {
        return Object.assign({}, state, {
            error: action.error
        });
    }
    if (action.type === SUBMITTED_ANSWER) {
        return Object.assign({}, state, {
            response: action.data,
            error: null,
        });
    }
    if (action.type === CLEAR_RESPONSE) {
        return Object.assign({}, state, {
            response: [],
            error: null,
        });
    }
    if (action.type === FETCH_DRAGONS_SUCCESS) {
        return Object.assign({}, state, {
            dragons: action.data.dragons,
            error: null,
        });
    }
    return state;
}
