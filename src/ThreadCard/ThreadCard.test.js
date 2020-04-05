import React from 'react';
import ReactDOM from 'react-dom';
import ThreadCard from './ThreadCard';
import { BrowserRouter } from 'react-router-dom'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter><ThreadCard /></BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});