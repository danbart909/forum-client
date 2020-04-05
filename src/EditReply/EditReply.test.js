import React from 'react';
import ReactDOM from 'react-dom';
import EditReply from './EditReply';
import { BrowserRouter } from 'react-router-dom'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter><EditReply /></BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});