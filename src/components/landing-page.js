import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
import './landing-page.css';
import logo from '../assets/img/logo.png';
import sigil from '../assets/img/sigil.jpg'
import LoginForm from './login-form';

export function LandingPage(props) {
    // If we are logged in redirect straight to the user's dashboard
    if (props.loggedIn) {
        return <Redirect to="/dashboard" />;
    }

    return (
        <div className="gif">
            <div className="home">
                <h2>DuoDragons<img className="landing-sigil" src={sigil} alt="A three headed red dragon"/> </h2>
                {/* <img src={logo}/> */}
                <Link to="/login">Log In</Link>
                <br /><br />
                <Link to="/register">Register</Link>
            </div>
        </div>

    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);
