import React from 'react';
import ReactDOM from 'react-dom';

//utils
import * as ApiUtil from './util/session_api_util'
//

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");

  //test
  window.login = ApiUtil.login;
  window.logout = ApiUtil.logout;
  window.signup = ApiUtil.signup;
  //test

  ReactDOM.render(<h1>SNACC</h1>, root)
})