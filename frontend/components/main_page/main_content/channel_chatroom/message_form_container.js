import MessageForm from './message_form';
import {connect} from 'react-redux';


const msp = (state,ownProps) => {
  debugger
  return{
  currentUser: state.entities.users[state.session.id],
  channel: state.entities.channels[ownProps.match.params.channelId]
  }
}

export default connect(msp, null)(MessageForm);