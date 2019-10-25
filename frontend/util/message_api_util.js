export const fetchChannelMessages = (channelId) =>
  $.ajax({
    method: "GET",
    url: "api/messages",
    data: {
      id: channelId,
      type: "channel"
    }
});

export const fetchGroupMessages = (dmGroupId) => {
  
  return $.ajax({
    method: "GET",
    url: "api/messages",
    data: {
      id: dmGroupId,
      type: "dm_group"
    }
  }
)};

export const fetchMessage = messageId =>
  $.ajax({
    method: "GET",
    url: `api/messages/${messageId}`,
});



export const deleteMessage = messageId =>
  $.ajax({
    method: "DELETE",
    url: `api/messages/${messageId}`,
  });