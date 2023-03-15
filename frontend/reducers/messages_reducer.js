import {
  RECEIVE_MESSAGES,
  RECEIVE_MESSAGE,
  REMOVE_MESSAGE
} from '../actions/message_actions';
import {merge} from 'lodash';
import { RECEIVE_CHANNEL } from '../actions/channel_actions';
import { RECEIVE_GROUP } from '../actions/dm_group_actions';

const messagesReducer = (oldState = {}, action) => {

  Object.freeze(oldState);
  let newState
  switch (action.type) {
    case RECEIVE_MESSAGES: {
      newState = {};
      action.messages.forEach(message => (newState[message.id] = message));
      return newState;
    }
    case RECEIVE_CHANNEL: {
      newState = {};
      action.messages.forEach(message => (newState[message.id] = message));
      return newState;
    }
    case RECEIVE_GROUP: {
      newState = {};
      action.messages.forEach(message => (newState[message.id] = message));
      return newState;
    }
    case RECEIVE_MESSAGE: {
      return merge({}, oldState, { [action.message.id]: action.message });
    }
    case REMOVE_MESSAGE: {
      
      newState = merge({}, oldState);
      delete newState[action.message.id];
      
      return newState;
    }
    default:
      return oldState;
  }
}

export default messagesReducer;