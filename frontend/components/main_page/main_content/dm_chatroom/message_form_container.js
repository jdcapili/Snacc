import MessageForm from "../channel_chatroom/message_form";
import { connect } from "react-redux";

const msp = (state, ownProps) => {
  return {
    currentUser: state.entities.users[state.session.id],
  };
};

export default connect(
  msp,
  null
)(MessageForm);
