import ChannelChat from './channel_chat';
import {fetchChannelMessages} from '../../../../actions/message_actions';
import {fetchChannel} from '../../../../actions/channel_actions';
import {connect} from 'react-redux';


const msp = (state,ownProps) => {

  let channel = state.entities.channels[ownProps.match.params.channelId];
  let messages = Object.values(state.entities.messages).filter((message) => {
    return channel.message_ids.includes(message.id)

  });

  return{
  currentUser: state.entities.users[state.session.id],
  channel,
  messages
  }
}

const mdp = dispatch => ({
  fetchChannelMessages: (id) => dispatch(fetchChannelMessages(id)),
  fetchChannel: (channelId) => dispatch(fetchChannel(channelId)),
})

export default connect(msp, mdp)(ChannelChat);