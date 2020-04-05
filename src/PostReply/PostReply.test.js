import React from 'react';
import ReactDOM from 'react-dom';
import PostReply from './PostReply';
import { BrowserRouter } from 'react-router-dom'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter><PostReply /></BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});