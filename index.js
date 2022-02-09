import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


function validateForm()  {
  var u = document.getElementById("username").value;
  var p = document.getElementById("password").value;

  if(u== "") {
      alert("Please enter your Username");
      return false;
  }
  if(p == "") {
      alert("Please enter you Password");
      return false;
  }

  alert("All datas are valid!, send it to the server!")

  return true;
}

