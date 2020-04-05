import React from 'react';
import ReactDOM from 'react-dom';
import PostReply from './PostReply';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PostReply />, div);
  ReactDOM.unmountComponentAtNode(div);
});