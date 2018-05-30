import React from 'react';
import {connect} from 'react-redux'
import {submittedAnswer, nextQuestion} from '../actions/questions';
import {fetchProtectedData} from '../actions/protected-data';



export class QuestionForm extends React.Component{
    componentDidMount() {
        this.props.dispatch(fetchProtectedData());
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
                        <button type='submit'>Submit</button>
                    </form>
         
        </div>
    )
    }
    }
const mapStateToProps = state => {
    return {
        title: state.protectedData.data.title,
        content: state.protectedData.data.content,
       
    };
};

export default connect(mapStateToProps)(QuestionForm)