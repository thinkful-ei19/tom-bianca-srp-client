import { API_BASE_URL } from '../config';


//ANSWER CORRECTLY
//ANSWER INCORRECTLY

//
export const ANSWER_QUESTION_REQUEST = 'ANSWER_QUESTION_REQUEST';
export const answerQuestionRequest = () => ({
    type: ANSWER_QUESTION_REQUEST
})

export const ANSWER_QUESTION_ERROR = 'ANSWER_QUESTION_ERROR';
export const answerQuestionError = (error) => ({
    type: ANSWER_QUESTION_ERROR,
    error
})
export const SUBMITTED_ANSWER = 'SUBMITTED_ANSWER';
export const submittedAnswer = data => ({
    type: SUBMITTED_ANSWER,
    data
});

export const ANSWER_QUESTION_CORRECTLY ='ANSWER_QUESTION_CORRECTLY';
export const answerQuestionCorrectly = (data, index) => ({
    type: ANSWER_QUESTION_CORRECTLY,
    data,
    index
});
export const ANSWER_QUESTION_INCORRECTLY  = 'ANSWER_QUESTION_INCORRECTLY';
export const answerQuestionIncorrectly = data => ({
    type: ANSWER_QUESTION_INCORRECTLY,
    data
});
export const NEXT_QUESTION = 'NEXT_QUESTION';
export const nextQuestion = data => ({
    type: NEXT_QUESTION,
    data
})
export const answerQuestion = (data) => (dispatch, getState) => {
    dispatch(answerQuestionRequest());
    const authToken = getState().auth.authToken;
    const userId = getState().auth.currentUser.id;
    console.log(userId);
    return fetch(`${API_BASE_URL}/questions/${userId}`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { Authorization: `Bearer ${authToken}`}
        
    })
        .then(res => {
            if(!res.ok){
                return Promise.reject(res.statusText);
            }
            return res.json();
        })
        .then(data => dispatch(submittedAnswer(data)))
        .catch(err => dispatch(answerQuestionError(err)));
}