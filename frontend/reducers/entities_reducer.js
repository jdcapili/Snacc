import {combineReducers} from 'redux';
import usersReducer from './users_reducer';
import channelsReducer from './channels_reducer';
import messagesReducer from './messages_reducer';
import uiReducer from './ui_reducer';
import dmGroupsReducer from './dm_groups_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  channels: channelsReducer,
  dmGroups: dmGroupsReducer,
  messages: messagesReducer,
  ui: uiReducer
})

export default entitiesReducer;