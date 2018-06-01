import React from 'react';
import { connect } from 'react-redux';
import { clearAuth } from '../actions/auth';
import { clearAuthToken } from '../local-storage';
import { Link, Redirect } from 'react-router-dom';
import './footer-bar.css'
import sigil from '../assets/img/sigil.jpg';

export class FooterBar extends React.Component {
    render() {
        return 
        
        // <div className="footer-bar">
        // // </div>
    }
}

export default connect()(FooterBar);