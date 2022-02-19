import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Router from './Router';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Router>
    <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

