import { connect } from 'react-redux';
import { fetchChannels, deleteChannel } from '../../../actions/channel_actions';
import { receiveMessage,receiveMessages } from '../../../actions/message_actions';
import { logout } from '../../../actions/session_actions';
import { openModal, closeModal } from '../../../actions/modal_actions';
import SideBar from './side_bar';

const msp = state => {
  
  
  return {
    currentUser: state.entities.users[state.session.id],
    channels: state.entities.channels
  };
}

const mdp = dispatch => {
  return {
    receiveMessage: (message) => dispatch(receiveMessage(message)),
    receiveMessages: (messages) => dispatch(receiveMessages(messages)),
    fetchChannels: (id) => dispatch(fetchChannels(id)),
    deleteChannel: (id) => dispatch(deleteChannel(id)),
    logout: () => dispatch(logout()),
    openModal: (modalType,data) => dispatch(openModal(modalType,data)),
    closeModal: () => dispatch(closeModal())
  };
}

export default connect(msp,mdp)(SideBar)