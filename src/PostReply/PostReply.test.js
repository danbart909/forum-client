import React from 'react';
import ReactDOM from 'react-dom';
import PostReply from './PostReply';
import { BrowserRouter } from 'react-router-dom';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  shallow(<BrowserRouter><PostReply /></BrowserRouter>);
})