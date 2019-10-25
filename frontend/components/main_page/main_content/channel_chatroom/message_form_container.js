import MessageForm from './message_form';
import {connect} from 'react-redux';
import { withRouter } from "react-router-dom";

const msp = (state,ownProps) => {

  return{
  currentUser: state.entities.users[state.session.id],
  channel: state.entities.channels[ownProps.match.params.channelId],
  channelType: 'ChatChannel'
  }
}

export default withRouter(connect(msp, null)(MessageForm));