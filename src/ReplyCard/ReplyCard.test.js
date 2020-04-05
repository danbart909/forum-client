import React from 'react';
import ReactDOM from 'react-dom';
import ReplyCard from './ReplyCard';
import { BrowserRouter } from 'react-router-dom'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter><ReplyCard /></BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});