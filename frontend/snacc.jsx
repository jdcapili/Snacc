import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

//utils
import * as channels from './actions/channel_actions'
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
  window.fetchChannels = channels.fetchChannels;
  window.fetchChannel = channels.fetchChannel;
  window.createChannel = channels.createChannel;
  window.deleteChannel = channels.deleteChannel;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  //test



  ReactDOM.render(<Root store={store} />, root)
})