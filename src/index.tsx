import React from 'react';
import ReactDOM from 'react-dom';
import AppView from './AppView';
import reportWebVitals from './reportWebVitals';

require('./styles/index.css');

ReactDOM.render(
  <AppView />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
