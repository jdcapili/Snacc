import {
  RECEIVE_GROUPS,
  RECEIVE_GROUP,
  REMOVE_GROUP
} from "../actions/dm_group_actions";
import {
  RECEIVE_MESSAGE
} from "../actions/message_actions";
import { merge } from "lodash";

const dmGroupsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_GROUPS: {
      let newState = {};
      action.dmGroups.forEach(dmGroup => {
        newState[dmGroup.id] = dmGroup;
      });
      return newState;
    }
    case RECEIVE_GROUP: {
      let newState = merge({}, oldState);
      delete newState[action.dmGroup.id];
      newState = merge({}, newState, { [action.dmGroup.id]: action.dmGroup });
      return newState;
    }
    case RECEIVE_MESSAGE: {
      
      let newState = merge({}, oldState);
      if (action.channelType === "dmGroup") {
        delete newState[action.message.dm_group.id];
        newState = merge({}, newState, {
          [action.message.dm_group.id]: action.message.dm_group
        });
      }
      return newState;
    }

    case REMOVE_GROUP: {
      let newState = merge({}, oldState);
      delete newState[action.dmGroupId];
      return newState;
    }
    default:
      return oldState;
  }
};

export default dmGroupsReducer;
