import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // strictMode バグを見つけてくれる
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


