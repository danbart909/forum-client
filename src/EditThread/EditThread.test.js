import React from 'react';
import ReactDOM from 'react-dom';
import EditThread from './EditThread';
import { BrowserRouter } from 'react-router-dom'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter><EditThread /></BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});