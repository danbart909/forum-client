import React from 'react';
import ReactDOM from 'react-dom';
import ForumView from './ForumView';
import { BrowserRouter } from 'react-router-dom';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  shallow(<BrowserRouter><ForumView /></BrowserRouter>);
})