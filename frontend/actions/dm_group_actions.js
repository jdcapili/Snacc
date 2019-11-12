import * as DmGroupsApiUtil from "../util/dm_group_api_util";

export const RECEIVE_GROUPS = "RECEIVE_GROUPS";

export const RECEIVE_GROUP = "RECEIVE_GROUP";

export const REMOVE_GROUP = "REMOVE_GROUP";

//REG ACTION CREATORS

export const receiveGroups = dmGroups => ({
  type: RECEIVE_GROUPS,
  dmGroups
});

export const receiveGroup = payload => {
  return {
    type: RECEIVE_GROUP,
    dmGroup: payload.dm_group,
    messages: payload.messages,
    members: payload.members
  };
};

export const removeGroup = dmGroupId => ({
  type: REMOVE_GROUP,
  dmGroupId
});

//thunk action creators

export const fetchDmGroups = () => dispatch => {
  return DmGroupsApiUtil.fetchDmGroups().then(payload => {
    
    return dispatch(receiveGroups(payload))
  }
  );
};

export const fetchDmGroup = (groupId) => dispatch => {
  return DmGroupsApiUtil.fetchDmGroup(groupId).then(payload =>
    dispatch(receiveGroup(payload))
  );
};

export const createDmGroup = userIds => dispatch => {
  return DmGroupsApiUtil.createDmGroup(userIds).then(payload => {
    
    return dispatch(receiveGroup(payload))
  }
  );
};

export const deleteDmGroup = groupId => dispatch => {
  return DmGroupsApiUtil.deleteDmGroup(groupId).then(payload =>
    dispatch(removeGroup(payload))
  );
};
