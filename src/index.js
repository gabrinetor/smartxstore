import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';  
import reportWebVitals from './reportWebVitals';
<<<<<<< HEAD
import {ProductProvider} from './context';
import { Router } from 'react-router-dom';

ReactDOM.render(
  <ProductProvider>
    <Router>
      <App />
    </Router>
  </ProductProvider>,
=======

ReactDOM.render(
    <App />,
>>>>>>> 1ba7a81385445366745f7783448c8a8aafcdc634
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
