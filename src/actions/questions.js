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
export const submittedAnswer = answer => ({
    type: SUBMITTED_ANSWER,
    answer
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
export const SKIP_QUESTION = 'SKIP_QUESTION';
export const skipQuestion = data => ({
    type: SKIP_QUESTION,
    data
})
export const answerQuestion = () => dispatch => {
    dispatch(answerQuestionRequest());
    return fetch(`${API_BASE_URL}/questions`, {
        method: 'PUT',
        // headers: { Authorization: `Bearer${authToken}`}
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