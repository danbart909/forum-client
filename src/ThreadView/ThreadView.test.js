import React from 'react';
import ReactDOM from 'react-dom';
import ThreadView from './ThreadView';
import { BrowserRouter } from 'react-router-dom';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  shallow(<BrowserRouter><ThreadView /></BrowserRouter>);
})