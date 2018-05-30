import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import {fetchProtectedData} from '../actions/protected-data';
import {submittedAnswer} from '../actions/questions';



export class Dashboard extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchProtectedData());
    }
    submit(event) {
        event.preventDefault();
        this.props.dispatch(submittedAnswer({
          answer: event.target.answer.value,
        }));
        event.target.reset();
      }
    render() {
        let answer = this.props.protectedData[0];
        console.log(answer);
        let questions = this.props.protectedData;
        console.log(this.props);
        console.log(questions);
        const data = questions.map((question, index) => (
            <li key={index}>
                {question.title}
            </li>
        ));
        return (
            <div className="dashboard">
                <div className="dashboard-username">
                    Username: {this.props.username}
                </div>
                <div className="dashboard-name">Name: {this.props.name}</div>
                <div className="dashboard-protected-data">
                    Protected data: {data}
                    
                    <input type="answer" name="userAnswer" id="userAnswer" className="text" min="1" max="100" placeholder="Enter your Answer" required />
                    
                    <input type="submit" id="submitButton" className="button" name="submit" value="Submit"/>
                </div>
            </div>
        );
        // console.log(input.value);
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
