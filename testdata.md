message: {
  id: 6,
  body: 'new hello',
  author_id: 1
}

icons source: https://icons8.com




chat bug:
(AJAX request): I was trying to query Message.where(messageable_type: channel, messageable_id: params[:id]) and it keeps sending a GET request to '/cable'
solution: instead of querying for each messageable_type and messageable_id, query for messageable: channel/dm instance. it will not dispatch a get request to /cable

render bug: everytime I refreshed a page and pressed back a component would render momentarily then disappear.
solution: I noticed that turbolinks was running and remembered that turbolinks doesn't work well with hashrouter. I deleted turbolinks on application.js and removed it from my rails gemfile and reinstalled the whole thing.


questions:
<!-- 1. inverse_of // answered -->
<!-- 2. what broadcast_to does in after receiving data -->
<!-- 3. do I fetch messages on initial load of a chatroom??? // most likely??. also do I run componentDidMount/componentDidUpdate?? -->
<!-- 4. json setup: channel: { id: 1, author_id: 1, message_ids: [1,2,3,4,…]} message: {messages under the channel} -->
5. messages are not rendering everytime I chat but the backend creates the messages // probably related to #2.
6. Should I fetch all messages data and just key in to those messages based on a channel's list of message_ids?

[ ] Make sure channel messages get fetched(avoid n+1 queries).
[ ] Every created user should be included in general channel.
[ ] Channel names should not have whitespaces or special characters other than - and _.(could have numbers)
[ ] Channels should be searchable and subscribeable.
[ ] User info in mainpage should change mouse on hover.(actually most of the side bar content)

