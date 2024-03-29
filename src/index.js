import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
//import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import ScrollTop from './components/ScrollTop';
import ScrollToTop from './hooks/ScrollToTop';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
  // <BrowserRouter basename={`${process.env.REACT_APP_API_URL=== "localhost" ? "" : "netflix"}`} >
  //   <App />
  // </BrowserRouter>
  
  <BrowserRouter >
    <ScrollToTop/>
     <App />
 </BrowserRouter>
 

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
