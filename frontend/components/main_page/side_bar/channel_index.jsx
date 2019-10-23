// runs subscriberHelper on didMount
import React from 'react';


const subscribeChannels = (channelsArray, subsChannelArr, receiveMessage) => {
  
  channelsArray.forEach((channel) => {

    if (subsChannelArr.includes(channel.id) && App.cable.subscriptions.subscriptions.every((subs) => JSON.parse(subs.identifier).id !== channel.id))
    {

        App.cable.subscriptions.create(
          { channel: "ChatChannel", id: channel.id },
          {
            received: data => {
              
              switch (data.type) {
                case "message":
                  
                  if(data.message.messageable_id === channel.id){
                  receiveMessage(data.message); //dispatch actions
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