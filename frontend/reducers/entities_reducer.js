import {combineReducers} from 'redux';
import usersReducer from './users_reducer';
import channelsReducer from './channels_reducer';
import messagesReducer from './messages_reducer';
import uiReducer from './ui_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  channels: channelsReducer,
  messages: messagesReducer,
  ui: uiReducer
})

export default entitiesReducer;