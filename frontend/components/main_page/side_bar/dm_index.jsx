// runs subscriberHelper on didMount
import React from 'react';


const subscribeDmGroups = (dmGroupsArray, subsDmGroupArr, receiveMessage) => {
 
  dmGroupsArray.forEach((dmGroup) => {
   
    if (subsDmGroupArr.includes(dmGroup.id) &&
      App.cable.subscriptions.subscriptions.every((subs) => {
        let identifier = JSON.parse(subs.identifier)
        if (identifier.channel === "ChatChannel") return true;
        else{return identifier.id !== dmGroup.id;}
      })) {
      App.cable.subscriptions.create(
        { channel: "DmChatChannel", id: dmGroup.id },
        {
          received: data => {
            debugger
            switch (data.type) {
              case "message":
                debugger
                if (data.datum.message.messageable_id === dmGroup.id) {
                  debugger
                  receiveMessage(data.datum, "dmGroup"); //dispatch actions
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

export default subscribeDmGroups