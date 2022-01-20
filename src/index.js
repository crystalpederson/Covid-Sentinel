import React from 'react';
import { render } from 'react-dom';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import App from './components/App';
import Styles from './stylesheets/styles.css';

render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,

  document.getElementById('root')
);
