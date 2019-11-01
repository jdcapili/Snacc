import * as MessagesApiUtil from '../util/message_api_util';


export const RECEIVE_MESSAGES = 'RECEIVE_MESSAGES';
export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE';
export const REMOVE_MESSAGE = "REMOVE_MESSAGE";

//reg action creators

export const receiveMessages = (messages) => {
  
  return {type: RECEIVE_MESSAGES,
  messages}
};

export const receiveMessage = (datum, channelType) => {
  debugger
  return {type: RECEIVE_MESSAGE,
    message: datum.message,
    chatChannel: datum.channel || datum.dm_group,
    author: datum.author,
  channelType}
};

export const removeMessage = (messageId) => ({
  type: REMOVE_MESSAGE,
  messageId
});

// thunk action creators

export const fetchChannelMessages = (channelId) => dispatch => { //tested
  return MessagesApiUtil.fetchChannelMessages(channelId)
  .then(payload => dispatch(receiveMessages(payload)))
}

export const fetchGroupMessages = (dmGroupId) => dispatch => { //tested
  
  return MessagesApiUtil.fetchGroupMessages(dmGroupId)
  .then(payload => dispatch(receiveMessages(payload)))
}

export const fetchMessage = messageId => dispatch => { //tested
  return MessagesApiUtil.fetchMessage(messageId)
  .then(payload => dispatch(receiveMessage(payload)))
}


export const deleteMessage = messageId => dispatch => { //tested
  return MessagesApiUtil.deleteMessage(messageId)
  .then(payload => dispatch(removeMessage(payload)))
}