import React from 'react';
import ReactDOM from 'react-dom';
import ThreadCard from './ThreadCard';
import { BrowserRouter } from 'react-router-dom';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  shallow(<BrowserRouter><ThreadCard /></BrowserRouter>);
})