import React from 'react';
import ReactDOM from 'react-dom';
import ThreadView from './ThreadView';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ThreadView />, div);
  ReactDOM.unmountComponentAtNode(div);
});