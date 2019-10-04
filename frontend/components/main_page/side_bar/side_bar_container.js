import { connect } from 'react-redux';
import { fetchChannels } from '../../../actions/channel_actions';
import { logout } from '../../../actions/session_actions';
import { openModal, closeModal } from '../../../actions/modal_actions';
import SideBar from './side_bar';

const msp = state => {
  // debugger
  return {
    currentUser: state.entities.users[state.session.id],
    channels: state.entities.channels
  };
}

const mdp = dispatch => {
  return {
    fetchChannels: () => dispatch(fetchChannels()),
    logout: () => dispatch(logout()),
    openModal: () => dispatch(openModal("channel")),
    closeModal: () => dispatch(closeModal())
  };
}

export default connect(msp,mdp)(SideBar)