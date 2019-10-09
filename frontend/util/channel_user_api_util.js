
export const createSubscription = (channelId, userIds) => {
  return $.ajax({
    method: "POST",
    url: "api/channel_users",
    data: {
      channel_user: {
        channel_id: channelId,
        user_ids: userIds
      }
    }
  });
};

export const deleteSubscription = (channelId) => {
  return $.ajax({
    method: "DELETE",
    url: `api/channel_users/${channelId}`,
    data: {
      channel_user: {
        channel_id: channelId
      }
    }
  });
};
