import React from 'react';
import ReactDOM from 'react-dom';
import ThreadCard from './ThreadCard';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ThreadCard />, div);
  ReactDOM.unmountComponentAtNode(div);
});