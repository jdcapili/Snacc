import MainHeader from './main_header';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import { createSubscription, deleteSubscription } from '../../../../actions/channel_user_actions';
import { fetchAllUsers } from '../../../../actions/session_actions';
import { receiveMessage} from "../../../../actions/message_actions";

const msp = (state,ownProps) => {

  return {
    channel: state.entities.channels[ownProps.match.params.channelId],
    currentUser: state.entities.users[state.session.id]
  };
}

const mdp = dispatch => {
  return {
    createSubscription: (channelId, userIds) =>
      dispatch(createSubscription(channelId, userIds)),
    deleteSubscription: channelId => dispatch(deleteSubscription(channelId)),
    fetchAllUsers: () => dispatch(fetchAllUsers()),
    receiveMessage: message => dispatch(receiveMessage(message))
  };
}

export default withRouter(connect(msp,mdp)(MainHeader));

