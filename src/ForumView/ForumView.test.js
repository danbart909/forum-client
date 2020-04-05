import React from 'react';
import ReactDOM from 'react-dom';
import ForumView from './ForumView';
import { BrowserRouter } from 'react-router-dom'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter><ForumView /></BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});