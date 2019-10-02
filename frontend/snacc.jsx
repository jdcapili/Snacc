import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

//utils
import * as actions from './actions/session_actions'
//

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  
  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  //test
  window.login = actions.login;
  window.logout = actions.logout;
  window.signup = actions.signup;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  //test



  ReactDOM.render(<Root store={store} />, root)
})