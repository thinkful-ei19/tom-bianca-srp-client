import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';

export const FETCH_PROTECTED_DATA_SUCCESS = 'FETCH_PROTECTED_DATA_SUCCESS';
export const fetchProtectedDataSuccess = data => ({
    type: FETCH_PROTECTED_DATA_SUCCESS,
    data
});

export const FETCH_PROTECTED_DATA_ERROR = 'FETCH_PROTECTED_DATA_ERROR';
export const fetchProtectedDataError = error => ({
    type: FETCH_PROTECTED_DATA_ERROR,
    error
});

export const fetchProtectedData = () => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    const userId = getState().auth.currentUser.id;
    return fetch(`${API_BASE_URL}/questions/${userId}`, {
        method: 'GET',
        headers: {
            // Provide our auth token as credentials
            Authorization: `Bearer ${authToken}`

        }
  })    .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then((data) => dispatch(fetchProtectedDataSuccess(data)))
        .catch(err => {
            dispatch(fetchProtectedDataError(err));
        });
};

export const ANSWER_QUESTION_REQUEST = 'ANSWER_QUESTION_REQUEST';
export const answerQuestionRequest = () => ({
    type: ANSWER_QUESTION_REQUEST
})

export const SUBMITTED_ANSWER = 'SUBMITTED_ANSWER';
export const submittedAnswer = data => ({
    type: SUBMITTED_ANSWER,
    data
});

export const ANSWER_QUESTION_ERROR = 'ANSWER_QUESTION_ERROR';
export const answerQuestionError = (error) => ({
    type: ANSWER_QUESTION_ERROR,
    error
})

export const answerQuestion = (data) => (dispatch, getState) => {
    dispatch(answerQuestionRequest());
    const authToken = getState().auth.authToken;
    const userId = getState().auth.currentUser.id;
    console.log(userId);
    console.log(data);
    return fetch(`${API_BASE_URL}/questions`, {
        method: 'PUT',
        body: JSON.stringify({ data }),
        headers: {
            'Authorization': `Bearer ${authToken}`,
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    })
        .then(res => {
            if (!res.ok) {
                return Promise.reject(res.statusText);
            }
            return res.json();
        })
        .then(res => dispatch(submittedAnswer(res)))
        .catch(err => dispatch(answerQuestionError(err)));
}