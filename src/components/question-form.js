import React from 'react';
import {connect} from 'react-redux'
import requiresLogin from './requires-login';
import {submittedAnswer, nextQuestion, answerQuestion} from '../actions/questions';
import {fetchProtectedData} from '../actions/protected-data';



export class QuestionForm extends React.Component{
    componentDidMount() {
        this.props.dispatch(fetchProtectedData());
    }
    onSubmit(value){
        return this.props.dispatch(answerQuestion(value));
    }
    render(){
        console.log(this.props);
        return(
            <div className="question-form">
                        <form className='question'
                        onSubmit={e=>{
                            e.preventDefault();
                                e.target.answer.value='';}}>
                            <input type='text' name="answer"/>
                            <button className="submit">Submit</button>
                            <button className="next">Next Question</button>
                        </form>
            
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        questions: state.protectedData.title,
        answer: state.protectedData.content

    };
};

export default requiresLogin(connect(mapStateToProps)(QuestionForm));