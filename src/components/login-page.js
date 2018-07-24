import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import './login-page.css';

import LoginForm from './login-form';

export function LoginPage(props) {
    if (props.loggedIn) {
        return <Redirect to="/dashboard" />;
    }
    return (
        <div className="login">
            <h3 className="welcome">Welcome Back</h3>
            <LoginForm />
            <section className="descriptionBox">
             <h3 className="descriptionTitle">Repetition Makes the Dragon</h3>
             <li className='about'>Learn to speak the tongue of the dragon quickly and enhance your knowledge like a maester with our spaced repetition algorithm</li>
             <section className="descriptionBox">
                 <h3 className="descriptionTitle">Track Correct Answers</h3>
                 <li className='about'> Track your progress as you become a true targaryen. As you learn more words through spaced repetition the higher your score will become </li>
             </section>
             </section>
        </div>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LoginPage);
