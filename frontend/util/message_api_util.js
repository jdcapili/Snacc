export const fetchMessages = channelId =>
  $.ajax({
    method: "GET",
    url: "api/messages",
    data: {
      id: channelId
    }
  });
