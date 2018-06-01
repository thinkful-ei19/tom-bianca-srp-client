import {
    FETCH_PROTECTED_DATA_SUCCESS,
    FETCH_PROTECTED_DATA_ERROR,
    SUBMITTED_ANSWER
} from '../actions/protected-data';

const initialState = {
    data: [],
    error: null,
    response: [],
};

export default function reducer(state = initialState, action) {
    if (action.type === FETCH_PROTECTED_DATA_SUCCESS) {
        return Object.assign({}, state, {
            data: action.data,
            error: null
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
    return state;
}
