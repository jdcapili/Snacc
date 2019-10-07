import ChatRoom from './chatroom';
import { connect } from 'react-redux';

const msp = (state,ownProps) => {
  debugger
  return {
    currentUser: state.entities.users[state.session.id],
    channel: state.entities.channels[1]
  }
}


export default connect(msp, null)(ChatRoom);