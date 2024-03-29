export const fetchChannels = () =>
  $.ajax({
    method: "GET",
    url: "api/channels",

}); //should fetch channels currentUser is associated with

export const fetchChannel = channelId =>
  $.ajax({
    method: "GET",
    url: `api/channels/${channelId}`,
});

export const createChannel = (channel) =>{
  
  let {channel_name, userIdsToAdd} = channel;
  
  return $.ajax({
    method: "POST",
    url: "api/channels",
    data: {
      channel: {
        channel_name,
        user_ids: userIdsToAdd
      }
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