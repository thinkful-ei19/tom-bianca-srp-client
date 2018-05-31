import React from 'react';
import {connect} from 'react-redux';
import { Field, reduxForm, focus, reset } from 'redux-form';
import Input from './input';
import requiresLogin from './requires-login';
import {fetchProtectedData} from '../actions/protected-data';
import { QuestionForm } from './question-form';
import { QuestionCard } from './question-card';



export class Dashboard extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchProtectedData());
    }
    render() {
        return (
            
            <div className="dashboard">
                <div className="dashboard-username">
                    Welcome {this.props.username}!
                </div>
                <div className="dashboard-protected-data">
                    <QuestionCard question={this.props.protectedData} />
                </div>
                

            </div>
        );
    }
}

const mapStateToProps = state => {
    const {currentUser} = state.auth;
    return {
        username: state.auth.currentUser.username,
        name: `${currentUser.fullname}`,
        protectedData: state.protectedData.data
    };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));
