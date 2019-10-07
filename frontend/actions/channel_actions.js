import * as ChannelsApiUtil from "../util/channel_api_util";

export const RECEIVE_CHANNELS = "RECEIVE_CHANNELS";

export const RECEIVE_CHANNEL = "RECEIVE_CHANNEL";

export const REMOVE_CHANNEL = "REMOVE_CHANNEL";

//REG ACTION CREATORS

export const receiveChannels = (channels) => (
  {
    type: RECEIVE_CHANNELS,
    channels
  }
)

export const receiveChannel = (payload) => {
  // debugger
  return {
    type: RECEIVE_CHANNEL,
    channel: payload.channel,
    messages: payload.messages
  }
};

export const removeChannel = (channel) => (
  {
    type: RECEIVE_CHANNELS,
    channelId: channel.id
  }
)

//thunk action creators

export const fetchChannels = userId => dispatch => {
  return ChannelsApiUtil.fetchChannels(userId).then(
    payload => dispatch(receiveChannels(payload))
  );
};

export const fetchChannel = channelId => dispatch => {
  return ChannelsApiUtil.fetchChannel(channelId).then(
    payload => dispatch(receiveChannel(payload))
  );
};

export const createChannel = channel => dispatch => {
  return ChannelsApiUtil.createChannel(channel).then(
    payload => dispatch(receiveChannel(payload))
    
  );
};

export const deleteChannel = channelId => dispatch => {
  return ChannelsApiUtil.deleteChannel(channelId).then(
    payload => dispatch(removeChannel(payload))
  );
};