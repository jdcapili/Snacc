import MainHeader from './main_header';
import {connect} from 'react-redux';
import { createSubscription, deleteSubscription } from '../../../../actions/channel_user_actions';

const msp = (state,ownProps) => {

  return {
    channel: state.entities.channels[ownProps.channelId],
    currentUser: state.entities.users[state.session.id]
  }
}

const mdp = dispatch => {
  return {
    createSubscription: (channelId, userIds) => dispatch(createSubscription(channelId,userIds)),
    deleteSubscription: (channelId) => dispatch(deleteSubscription(channelId))
  }
}

export default connect(msp,mdp)(MainHeader);

