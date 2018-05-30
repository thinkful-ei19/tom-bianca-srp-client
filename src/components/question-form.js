import React from 'react';

export class QuestionForm extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            questions: []
        }
    }
    render(){
        return (console.log(this.state.questions));
    }
}