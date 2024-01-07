import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import global_en from './transitions/en/global.json';
import global_ar from './transitions/ar/global.json';

import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


reportWebVitals();
