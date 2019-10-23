import DmMainHeader from "./dm_main_header";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
// import {
//   createSubscription,
//   deleteSubscription
// } from "../../../../actions/channel_user_actions";
import { fetchAllUsers } from "../../../../actions/session_actions";
import { receiveMessage } from "../../../../actions/message_actions";

const msp = (state, ownProps) => {
  let memberIds = Object.values(state.entities.dmGroups).length !== 0 ? 
    state.entities.dmGroups[ownProps.match.params.dmGroupId].member_ids :
    [];
  let userList = Object.values(state.entities.users);
  let users = userList.length === 0 ? [] :
    userList.filter((user) => memberIds.includes(user.id) && user.id !== state.session.id);
  return {
    users,
    currentUser: state.entities.users[state.session.id]
  };
};

const mdp = dispatch => {
  return {
    // createSubscription: (channelId, userIds) =>
    //   dispatch(createSubscription(channelId, userIds)),
    // deleteSubscription: channelId => dispatch(deleteSubscription(channelId)),
    fetchAllUsers: () => dispatch(fetchAllUsers()),
    receiveMessage: message => dispatch(receiveMessage(message))
  };
};

export default withRouter(
  connect(
    msp,
    mdp
  )(DmMainHeader)
);
