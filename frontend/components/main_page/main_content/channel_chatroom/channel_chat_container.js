import ChannelChat from './channel_chat';
import {fetchChannelMessages} from '../../../../actions/message_actions';
import {connect} from 'react-redux';


const msp = (state,ownProps) => {
  // debugger
  return{
  currentUser: state.entities.users[state.session.id],
  channel: state.entities.channels[ownProps.match.params.channelId],
  messages: Object.values(state.entities.messages)
  }
}

const mdp = dispatch => ({
  fetchChannelMessages: (id) => dispatch(fetchChannelMessages(id))
})

export default connect(msp, mdp)(ChannelChat);