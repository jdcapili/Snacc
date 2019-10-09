// runs subscriberHelper on didMount
import React from 'react';


const subscribeChannels = (channelsArray, subsChannelArr, receiveMessage) => {
  
  channelsArray.forEach((channel) => {

    if (subsChannelArr.includes(channel.id)){
  
        App.cable.subscriptions.create(
          { channel: "ChatChannel", id: channel.id },
          {
            received: data => {
              
              switch (data.type) {
                case "message":
                  receiveMessage(data.message); //dispatch actions
                  break;
              }
            },
            speak: function (data) {
              
              return this.perform("speak", data);
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