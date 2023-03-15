// runs subscriberHelper on didMount
// import React from 'react';


const subscribeDmGroups = (dmGroupsArray, subsDmGroupArr, receiveMessage, removeMessage) => {
 
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
            
            switch (data.type) {
              case "messageDM":
                
                if (data.datum.message.messageable_id === dmGroup.id) {
                  
                  receiveMessage(data.datum, "dmGroup"); //dispatch actions
                }
                break;
              case "deleteDM":
                
                if (data.datum.message.messageable_id === dmGroup.id) {

                  removeMessage(data.datum, "dmGroup"); //dispatch actions
                }
                break;
            }
          },
          speak: function (data) {
            
            return this.perform("speakDM", data);
          },
          updateDM: function (data) {
            
            return this.perform("updateDM", data);
          },
          deleteDM: function (data) {
            return this.perform("deleteDM", data)
          },
        }
      );

    }
  })
}

export default subscribeDmGroups