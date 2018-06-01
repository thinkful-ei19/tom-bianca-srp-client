import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';

import RegistrationForm from './registration-form';
import './registration-page.css';

export function RegistrationPage(props) {
    // If we are logged in (which happens automatically when registration
    // is successful) redirect to the user's dashboard
    if (props.loggedIn) {
        return <Redirect to="/dashboard" />;
    }
    return (
        <div className="register">
            <div className="descriptionBoxes">
                <section className="descriptionBox">
                    <h3 className="descriptionRegister">Register to learn Valyrian</h3>
                    <RegistrationForm />
                    <Link to="/login">Login</Link>
                </section>
                <br/>
                <section className="descriptionBox">
                    <h3 className="descriptionTitle">Repetition Makes the Dragon</h3>
                    <li className='about'>Learn to speak the tongue of the dragon quickly and enhance your knowledge like a maester with our spaced repetition algorithm</li>
                    <section className="descriptionBox">
                        <h3 className="descriptionTitle">Track Correct Answers</h3>
                        <li className='about'> Track your progress as you become a true targaryen. As you learn more words through spaced repetition the higher your score will become </li>
                    </section>
                </section>
                
            </div>
        </div>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(RegistrationPage);
