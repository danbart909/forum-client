import React from 'react';
import ReactDOM from 'react-dom';
import PostThread from './PostThread';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PostThread />, div);
  ReactDOM.unmountComponentAtNode(div);
});