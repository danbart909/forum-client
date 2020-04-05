import React from 'react';
import ReactDOM from 'react-dom';
import EditThread from './EditThread';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<EditThread />, div);
  ReactDOM.unmountComponentAtNode(div);
});