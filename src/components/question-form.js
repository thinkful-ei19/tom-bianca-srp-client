import React from 'react';
import { connect } from 'react-redux'
import { fetchProtectedData, submittedAnswer, nextQuestion, answerQuestion, clearResponse } from '../actions/protected-data';
import { Field, reduxForm, focus } from 'redux-form';
import { registerUser } from '../actions/users';
import { login } from '../actions/auth';
import Input from './input';
import { required, nonEmpty, matches, length, isTrimmed } from '../validators';
import { QuestionCard } from './question-card';



export class QuestionForm extends React.Component {

    // sets timer to reset the correct/incorrect dev so it updates & plays sound on each submit
    timer() {
        this.refreshInterval = setTimeout(
            () => this.props.dispatch(clearResponse()),
            2000// five secs
        );  
    } 


    componentWillUpdate() {
        this.props.dispatch(fetchProtectedData())
    }


    onSubmit(value) {
        this.props.dispatch(answerQuestion(value));
        this.timer();
    }


    render() {
        return (
            <form
                className="question-form"
                onSubmit={this.props.handleSubmit(value =>
                    this.onSubmit(value.answer.toLowerCase().trim())
                )}
            >

                <label htmlFor="question-card">Valyrian Word = {this.props.question}</label>
                <Field
                    component={Input}
                    type="text"
                    name="answer"
                    placeholder="ex: tail"
                    validate={[required, nonEmpty, isTrimmed]}
                />
                <br />
                <button
                    type="submit"
                    disabled={this.props.pristine || this.props.submitting}>
                    Enter
                </button>
            </form>
        );
    }
}

export default reduxForm({
    form: 'question', onSubmitFail: (errors, dispatch) =>
        dispatch(focus('question', 'answer'))
})(QuestionForm);
