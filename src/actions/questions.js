import { API_BASE_URL } from '../config';
import { clearAuthToken } from '../local-storage';

export const FETCH_QUESTION_REQUEST ='FETCH_QUESTION_REQUEST';
export const fetchQuestionRequest = () => ({
    type: FETCH_QUESTION_REQUEST
});
export const FETCH_QUESTION_SUCCESS = 'FETCH_QUESTION_SUCCESS';
export const fetchQuestionSuccess = data => ({
    type: FETCH_QUESTION_SUCCESS,
    data
});
export const FETCH_QUESTION_ERROR = 'FETCH_QUESTION-ERROR';
export const fetchQuestionError = error => ({
    type: FETCH_QUESTION_ERROR,
    error
});
export const fetchQuestion = () => dispatch => {
    dispatch(fetchQuestionRequest());
    return fetch(`${API_BASE_URL}/questions`, {
        method: 'GET',
        // headers: { Authorization: `Bearer${authToken}`}
    })
        .then(res => {
            if(!res.ok){
                return Promise.reject(res.statusText);
            }
            return res.json();
        })
        .then(data => dispatch(fetchQuestionSuccess(data)))
        .catch(err => dispatch(fetchQuestionError(err)));
}