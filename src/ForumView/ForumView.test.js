import React from 'react';
import ReactDOM from 'react-dom';
import ForumView from './ForumView';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ForumView />, div);
  ReactDOM.unmountComponentAtNode(div);
});