import { connect } from 'react-redux';
import { fetchChannels, deleteChannel } from '../../../actions/channel_actions';
import { fetchDmGroups, deleteDmGroup } from "../../../actions/dm_group_actions";
import { receiveMessage,receiveMessages } from '../../../actions/message_actions';
import { logout, fetchAllUsers } from '../../../actions/session_actions';
import { openModal, closeModal } from '../../../actions/modal_actions';
import SideBar from './side_bar';

const msp = state => {
  
 
  return {
    currentUser: state.entities.users[state.session.id],
    channels: state.entities.channels,
    dmGroups: state.entities.dmGroups
  };
}

const mdp = dispatch => {
  return {
    receiveMessage: (message, channelType) => dispatch(receiveMessage(message,channelType)),
    receiveMessages: (messages) => dispatch(receiveMessages(messages)),
    fetchAllUsers: () => dispatch(fetchAllUsers()),
    fetchChannels: (id) => dispatch(fetchChannels(id)),
    deleteChannel: (id) => dispatch(deleteChannel(id)),
    fetchDmGroups: () => dispatch(fetchDmGroups()),
    deleteDmGroup: (id) => dispatch(deleteDmGroup(id)),
    logout: () => dispatch(logout()),
    openModal: (modalType,data) => dispatch(openModal(modalType,data)),
    closeModal: () => dispatch(closeModal())
  };
}

export default connect(msp,mdp)(SideBar)