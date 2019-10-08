export const fetchChannelMessages = channelId =>
  $.ajax({
    method: "GET",
    url: "api/messages",
    data: {
      id: channelId
    }
});

export const fetchMessage = messageId =>
  $.ajax({
    method: "GET",
    url: `api/messages/${messageId}`,
});

export const updateMessage = message =>
  $.ajax({
    method: "PATCH",
    url: `api/messages/${message.id}`,
    data: {
      message
    }
});

export const deleteMessage = messageId =>
  $.ajax({
    method: "DELETE",
    url: `api/messages/${messageId}`,
  });