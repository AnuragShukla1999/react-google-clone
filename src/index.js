import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter as Router } from 'react-router-dom';
import { StateContextProvider } from './contexts/StateContextProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StateContextProvider>
    <Router>
      <App />
    </Router>
  </StateContextProvider>
);


reportWebVitals();
