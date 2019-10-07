export const fetchChannels = sessionId =>
  $.ajax({
    method: "GET",
    url: "api/channels",
    data: {
      id: sessionId
  }
}); //should fetch channels currentUser is associated with

export const fetchChannel = channelId =>
  $.ajax({
    method: "GET",
    url: `api/channels/${channelId}`,
});

export const createChannel = channel =>{
  // 
  return $.ajax({
    method: "POST",
    url: "api/channels",
    data: {
      channel
  }
})
};

// export const updateChannel = channel =>
//   $.ajax({
//     method: "PATCH",
//     url: "api/channels",
//     data: {
//       channel
//   }
// });

export const deleteChannel = channelId =>
  $.ajax({
    method: "DELETE",
    url: `api/channels/${channelId}`
});