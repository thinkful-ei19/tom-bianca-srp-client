import { ANSWER_QUESTION_REQUEST, SUBMITTED_ANSWER, ANSWER_QUESTION_CORRECTLY, ANSWER_QUESTION_CORRECTLY, ANSWER_QUESTION_INCORRECTLY, ANSWER_QUESTION_ERROR, NEXT_QUESTION } from '../actions/questions';

const initialState = {
    data: null,
    error: null,
    loading: false
};

export function questionReducer(state = initialState, action) {
    if(action.type === ANSWER_QUESTION_REQUEST){
        return Object.assign({}, state, {
            loading: true
        });
    }
    else if(action.type === SUBMITTED_ANSWER){
        return Object.assign({}, state, {
            data: action.data,
            loading: false
        });
    }
    else if(action.type === ANSWER_QUESTION_CORRECTLY){
        return Object.assign({}, state, {
            loading: false
        })
    }
    else if(action.type === ANSWER_QUESTION_INCORRECTLY){
        return Object.assign({}, state, {
            loading: false
        })
    }
    else if(action.type === ANSWER_QUESTION_ERROR){
        return Object.assign({}, state, {
            loading: false,
            error
        })
    }
    else if(action.type === NEXT_QUESTION){
        return Object.assign({}, state,{
            data: data
        } )
    }
    return state;
}