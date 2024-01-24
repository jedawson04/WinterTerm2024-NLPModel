import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root')); // root to all of our code puts components in the html
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
