import React from 'react';
import ReactDOM from 'react-dom';
import EditThread from './EditThread';
import { BrowserRouter } from 'react-router-dom';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  shallow(<BrowserRouter><EditThread /></BrowserRouter>);
})