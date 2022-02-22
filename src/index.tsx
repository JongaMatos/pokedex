import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Router from './Router';
import App from './App';
import { LoadPokemonProvider } from './context';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <LoadPokemonProvider>
        <App />
      </LoadPokemonProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

