// runs subscriberHelper on didMount
import React from 'react';


const subscribeChannels = (channelsArray, subsChannelArr, receiveMessage) => {
  
  channelsArray.forEach((channel) => {

    if (subsChannelArr.includes(channel.id) &&
     App.cable.subscriptions.subscriptions.every((subs) =>{
       let identifier = JSON.parse(subs.identifier)
        if(identifier.channel === "DmChatChannel") return true;
        else{ return identifier.id !== channel.id; }
      }))
   
    {

      App.cable.subscriptions.create(
        { channel: "ChatChannel", id: channel.id },
        {
          received: data => {

            switch (data.type) {
              case "message":
                debugger
                if (data.datum.message.messageable_id === channel.id) {
                  debugger
                  receiveMessage(data.datum, "channel"); //dispatch actions
                }
                break;
            }
          },
          speak: function (data) {
            return this.perform("speak", data);
          },
          update: function (data) {

            return this.perform("update", data);
          },
          load: function () {
            return this.perform("load");
          }
        }
      );
          
      }
  })
}

export default subscribeChannels