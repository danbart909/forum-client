import React from 'react';
import ReactDOM from 'react-dom';
import EditReply from './EditReply';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<EditReply />, div);
  ReactDOM.unmountComponentAtNode(div);
});