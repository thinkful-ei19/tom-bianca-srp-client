import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
import './landing-page.css';
import LoginForm from './login-form';

export function LandingPage(props) {
    // If we are logged in redirect straight to the user's dashboard
    if (props.loggedIn) {
        return <Redirect to="/dashboard" />;
    }

    return (
        <div className="landingPage">
        <div className="home">
            <h2>Gūrēñagon se muña ēngos</h2>
            <LoginForm />
            <Link to="/register">Register</Link>
        </div>
        <div className="about">
            Learn high Valyrian using spaced repetition.
        </div>
        </div>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);
