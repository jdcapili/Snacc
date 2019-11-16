# SNACC

Snacc is a live-chat application that was based on Slack. Users can chat on multiple channels and read messages on those channel by joining the channel. Check out the live site! [live site!](https://snacc-aa.herokuapp.com/#/)

## Technologies

Snacc is created by using React/Redux for the client side and Rails/Postgresql on the server side. Rails Action Cables were used to implement live chat.

## Features

Snacc gives you the option to create a channel or a direct message group. You can select members for a channel through a list. If no members are selected, the channel created will have you as the only member by default. As for the direct message groups, it will not allow you to create a group with no selected members. Live chatting is implemented inside each channel and direct message groups. While you're in a channel or a direct message group, messages change in real-time. You can also edit your own messages by double-clicking them. This feature is disabled if you're trying to update another person's message.

![SnaccSplash](app/assets/readMeFiles/Snacc screenshot.png)


