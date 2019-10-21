import MessageForm from './message_form';
import {connect} from 'react-redux';


const msp = (state,ownProps) => {
 
  return{
  currentUser: state.entities.users[state.session.id],
  channel: state.entities.channels[ownProps.channel_id],
  subId: ownProps.subId
  }
}

export default connect(msp, null)(MessageForm);