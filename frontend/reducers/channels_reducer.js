import {
  RECEIVE_CHANNELS,
  RECEIVE_CHANNEL,
  REMOVE_CHANNEL
} from "../actions/channel_actions";
import { merge } from "lodash";

const channelsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_CHANNELS: {
      let newState = {}
      action.channels.forEach((channel) => {
        newState[channel.id] = channel
      });
      return newState;
    }
    case RECEIVE_CHANNEL: {
      let newState = merge({}, oldState);
      delete newState[action.channel.id]
      newState = merge({}, newState, { [action.channel.id]: action.channel });
      return newState
    }
    case REMOVE_CHANNEL: {
      let newState = merge({},oldState);
      delete newState[action.channelId];
      return newState;
    }
    default:
      return oldState;
  }
};

export default channelsReducer;
