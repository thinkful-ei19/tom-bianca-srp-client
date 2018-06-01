import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, focus, reset } from 'redux-form';
import Input from './input';
import requiresLogin from './requires-login';
import { fetchProtectedData } from '../actions/protected-data';
import { QuestionForm } from './question-form';
import { QuestionCard } from './question-card';
import FooterBar from './footer-bar';
import HeaderBar from './header-bar';
import './dashboard.css';


export class Dashboard extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchProtectedData());
    }
    render() {
        return (
            <div className="dash">
                <HeaderBar />
                <div className="dashboard">

                    <div className="dashboard-username">
                        Username: {this.props.username}
                    </div>
                    <div className="dashboard-protected-data">
                        <QuestionCard question={this.props.protectedData} response={this.props.response} />
                    </div>
                    {/* <FooterBar response={this.props.response} /> */}
                </div>
            </div>

        );
    }
}

const mapStateToProps = state => {
    const { currentUser } = state.auth;
    return {
        username: state.auth.currentUser.username,
        name: `${currentUser.fullname}`,
        protectedData: state.protectedData.data,
        response: state.protectedData.response
    };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));
