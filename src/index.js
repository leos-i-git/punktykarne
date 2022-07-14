import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Tabela from './Tabela';

const root = ReactDOM.createRoot(document.getElementById('formularz'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
const tabela = ReactDOM.createRoot(document.getElementById('tabela'))
tabela.render(
  <React.StrictMode>
    <Tabela/>
  
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
