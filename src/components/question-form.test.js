import React from 'react';
import {shallow} from 'enzyme';

import QuestionForm from './question-form';

describe('<QuestionForm />', () => {
    it('Renders without crashing', () => {
        shallow(<QuestionForm />);
    });
});