import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// get everything from App and render this to the div-element with the root-id
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
