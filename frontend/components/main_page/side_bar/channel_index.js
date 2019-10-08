// runs subscriberHelper on didMount
import {receiveMessage, receiveMessages} from '../../../actions/message_actions';

const subscribeChannels = (channelsArray, subsChannelArr) => {
  
  channelsArray.forEach((channel) => {

    if (subsChannelArr.includes(channel.id)){
  
        App.cable.subscriptions.create(
          { channel: "ChatChannel", id: channel.id },
          {
            received: data => {
              switch (data.type) {
                case "message":
                  dispatch(receiveMessage(data.message)); //dispatch actions
                  break;
                case "messages":
                  dispatch(receiveMessages(data.messages));
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