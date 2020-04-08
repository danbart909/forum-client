import React from 'react';
import ReactDOM from 'react-dom';
import EditReply from './EditReply';
import { BrowserRouter } from 'react-router-dom';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  shallow(<BrowserRouter><EditReply /></BrowserRouter>);
})