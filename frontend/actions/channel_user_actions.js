import * as ChannelUserApiUtil from '../util/channel_user_api_util';

import {receiveChannel} from './channel_actions';

export const createSubscription = (channelId, userIds) => dispatch => {
  return ChannelUserApiUtil.createSubscription(channelId, userIds)
  .then(payload => dispatch(receiveChannel(payload))
  );
};

export const deleteSubscription = (channelId) => dispatch => {
  return ChannelUserApiUtil.deleteSubscription(channelId)
  .then(payload => dispatch(receiveChannel(payload))
  );
};