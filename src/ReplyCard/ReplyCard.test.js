import React from 'react';
import ReactDOM from 'react-dom';
import ReplyCard from './ReplyCard';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ReplyCard />, div);
  ReactDOM.unmountComponentAtNode(div);
});