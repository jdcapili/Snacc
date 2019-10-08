import {
  RECEIVE_MESSAGES,
  RECEIVE_MESSAGE,
  REMOVE_MESSAGE
} from '../actions/message_actions';
import {merge} from 'lodash';
import { RECEIVE_CHANNEL, RECEIVE_CHANNELS } from '../actions/channel_actions';

const messagesReducer = (oldState = {}, action) => {

  Object.freeze(oldState);
  switch(action.type){
    case RECEIVE_MESSAGES:{
      let newState = {}
      action.messages.forEach((message) => 
      newState[message.id] = message)
      return newState;
    }
    case RECEIVE_CHANNEL: {
      let newState = {};
      action.messages.forEach(
        message => (newState[message.id] = message)
      );
      return newState;
    }
    case RECEIVE_MESSAGE: {
      return merge({}, oldState, {[action.message.id]: action.message})
    }
    case REMOVE_MESSAGE: {
      let newState = merge({}, oldState);
      delete newState[action.messageId]
      return newState;
    }
    default:
      return oldState;
  }
}

export default messagesReducer;