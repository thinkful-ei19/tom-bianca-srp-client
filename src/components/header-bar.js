import React from 'react';
import { connect } from 'react-redux';
import { clearAuth } from '../actions/auth';
import { clearAuthToken } from '../local-storage';
import { Link, Redirect } from 'react-router-dom';
import { fetchProtectedData, fetchDragons } from '../actions/protected-data';
import './header-bar.css'
import sigil from '../assets/img/sigil.jpg';

export class HeaderBar extends React.Component {
    logOut() {
        this.props.dispatch(clearAuth());
        clearAuthToken();
    }
    // componentDidMount() {
    //     this.props.dispatch(fetchProtectedData());
    // }
    componentWillUpdate() {
        this.props.dispatch(fetchDragons());
    }

    render() {
        // Only render the log out button if we are logged in
        let logOutButton;
        if (this.props.loggedIn) {
            logOutButton = (
                <button onClick={() => this.logOut()}>Log out</button>
            );
        }
        return <nav className="nav-bar">
            <ul className="nav">
                <li className="login">
                    {this.props.loggedIn ? null : <Link to="/login" className="nav-item">
                        Log In
                </Link>}
                </li>
                <li>
                    {this.props.loggedIn ?
                        <img className='sigil' src={sigil}>
                        </img> : null}
                </li>
                <li className="logout-button">
                    Welcome: {this.props.name}
                </li>
                <li className="logout-button">
                    Score: {this.props.dragons}
                </li>
                <li className="right">
                    <button className="logout-button" onClick={() => this.logOut()} style={this.props.loggedIn ? { display: 'inline-block' } : { display: 'none' }}>
                        Log Out
                    </button>
                </li>
            </ul>
        </nav>;
    }
}

const mapStateToProps = state => {
    const { currentUser } = state.auth;
    return {
        loggedIn: state.auth.currentUser !== null,
        username: state.auth.currentUser.username,
        dragons: state.protectedData.dragons,
        name: `${currentUser.fullname}`,
    };
}

export default connect(mapStateToProps)(HeaderBar);
