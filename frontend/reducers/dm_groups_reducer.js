import {
  RECEIVE_GROUPS,
  RECEIVE_GROUP,
  REMOVE_GROUP
} from "../actions/dm_group_actions";
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
