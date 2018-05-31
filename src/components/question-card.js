import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import QuestionForm from './question-form';

export function QuestionCard(props) {
    return (
        <div className="home">
            <h2>Translate into English</h2>
            <QuestionForm question={props.question}/>
        </div>
    );
}

export default connect()(QuestionCard);