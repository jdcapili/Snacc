import { RECEIVE_CURRENT_USER, RECEIVE_ALL_USERS } from '../actions/session_actions';
import { RECEIVE_CHANNEL } from '../actions/channel_actions';
import { RECEIVE_GROUP } from '../actions/dm_group_actions'
import {
  RECEIVE_MESSAGE,
} from "../actions/message_actions";
import {merge} from 'lodash';

const usersReducer = (oldState={}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_ALL_USERS: {
      let newState = {};

      action.users.forEach(user => (newState[user.id] = user));

      return newState;
    }
    case RECEIVE_CURRENT_USER: {
      return merge({}, oldState, { [action.user.id]: action.user });
    }
    case RECEIVE_CHANNEL: {
      let newState = merge({}, oldState);

      action.subscribers.forEach(subscriber => {
        delete newState[subscriber.id];
        newState = merge({}, newState, { [subscriber.id]: subscriber });
      });

      return newState;
    }
    case RECEIVE_GROUP: {
      let newState = merge({}, oldState);

      action.members.forEach(member => {
        delete newState[member.id];
        newState = merge({}, newState, { [member.id]: member });
      });

      return newState;
    }
    case RECEIVE_MESSAGE: {
      let newState = merge({}, oldState);
      delete newState[action.author.id];
      newState = merge({}, newState, { [action.author.id]: action.author });
      return newState;
    }
    default:
      return oldState;
  }
}

export default usersReducer