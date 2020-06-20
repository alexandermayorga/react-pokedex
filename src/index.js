import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { BrowserRouter } from "react-router-dom";


if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
  console.log("This is Development")
} else {
  console.log("This is Production")
}

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename="">
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
