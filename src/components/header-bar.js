import React from 'react';
import { connect } from 'react-redux';
import { clearAuth } from '../actions/auth';
import { clearAuthToken } from '../local-storage';
import { Link, Redirect } from 'react-router-dom';
import './header-bar.css'
import sigil from '../assets/img/sigil.jpg';

export class HeaderBar extends React.Component {
    logOut() {
        this.props.dispatch(clearAuth());
        clearAuthToken();
    }

    render() {
        // Only render the log out button if we are logged in
        let logOutButton;
        if (this.props.loggedIn) {
            logOutButton = (
                <button onClick={() => this.logOut()}>Log out</button>
            );
        }
        return  <nav className="nav-bar">
                    <ul className="nav">
                        <li className="login">
                            {this.props.loggedIn ? null : <Link to="/login" className="nav-item">
                                Log In
                        </Link>}
                        </li>
                        <li>
                            {this.props.loggedIn ? <Link to="/dashboard" className="nav-item">
                                <img className='sigil' src={sigil} />
                            </Link> : null}
                        </li>
                        <li>
                            {this.props.loggedIn ? null : <Link to="/" className="nav-item">
                                Home
                        </Link>}
                        </li>
                        <li>
                            <Link to="/about" className="nav-item">
                                About
                        </Link>
                        </li>
                        <li className="right">
                            <button className="logout-button" onClick={() => this.logOut()} style={this.props.loggedIn ? { display: 'inline-block' } : { display: 'none' }}>
                                {' '}
                                Log Out{' '}
                            </button>{' '}
                        </li>
                    </ul>
                </nav>;
    }
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(HeaderBar);
