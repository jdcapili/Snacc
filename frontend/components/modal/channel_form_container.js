import { connect } from "react-redux";
import ChannelForm from "./channel_form";
import { closeModal } from "../../actions/modal_actions";
import { createChannel } from "../../actions/channel_actions";
import { withRouter } from 'react-router-dom';

const msp = state => {
  return {
    users: Object.values(state.entities.users),
    currentUserId: state.session.id
  };
};

const mdp = dispatch => {
  return {
    closeModal: () => dispatch(closeModal()),
    createChannel: (channel) => dispatch(createChannel(channel))
  };
};

export default withRouter(connect(
  msp,
  mdp
)(ChannelForm));
