import { connect } from "react-redux";
import SidebarListItem from "./sidebar_list_item";
import { deleteChannel } from "../../../actions/channel_actions";

const msp = (state, ownProps) => {
  let channel = state.entities.channels[ownProps.channelId];
  let currentUserId = state.session.id;

  return {
    channel,
    currentUserId,
  };
};

const mdp = dispatch => {
  return {
    deleteChannel: id => dispatch(deleteChannel(id)),
  };
};

export default connect(
  msp,
  mdp
)(SidebarListItem);
