import MessageForm from "../channel_chatroom/message_form";
import { connect } from "react-redux";
import {withRouter} from "react-router-dom";

const msp = (state, ownProps) => {
  
  return {
    currentUser: state.entities.users[state.session.id],
    channel: state.entities.dmGroups[ownProps.match.params.dmGroupId],
    channelType: "DmChatChannel"
  };
};

export default withRouter(
  connect(
    msp,
    null
  )(MessageForm)
);
