import { FETCH_QUESTION_REQUEST, FETCH_QUESTION_SUCCESS, FETCH_QUESTION_ERROR } from '../actions/questions';

const initialState = {
    data: null,
    error: null,
    loading: false
};

export function questionReducer(state = initialState, action) {
    if(action.type === FETCH_QUESTION_REQUEST){
        return Object.assign({}, state, {
            loading: true
        });
    }
    else if(action.type === FETCH_QUESTION_SUCCESS){
        return Object.assign({}, state, {
            data: action.data,
            loading: false
        });
    }
    else if(action.type === FETCH_QUESTION_ERROR){
        return Object.assign({}, state, {
            error: action.error,
            loading: false
        })
    }
    return state;
}