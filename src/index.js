import React from 'react';
import {render} from 'react-dom';

import App from './App';
import reportWebVitals from './reportWebVitals';


import './views/assets/css/bootstrap.min.css';
import './views/assets/css/index.css';
import './views/assets/css/ionicons.min.css';
import './views/assets/css/font-awesome.min.css';


render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
