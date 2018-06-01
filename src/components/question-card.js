import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import QuestionForm from './question-form';
import sound from '../assets/img/correct.wav'

export function QuestionCard(props) {
    return (
        <div className="home">
            <h2>Translate into English</h2>
            <QuestionForm question={props.question} />
            <div className="footer-bar">
                <div className="footer">
                    <div>
                        {props.response.correct === true ? <div className="footer-item-true">
                            Correct <audio autoplay="true">
                                <source src={sound} type="audio/wav" />>
                                    </audio>
                        </div> : null}
                    </div>
                    <div>
                        {props.response.correct === false ? <div className="footer-item-false">
                            Incorrect
                    </div> : null}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default connect()(QuestionCard);