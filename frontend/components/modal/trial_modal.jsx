import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { createChannel } from '../../actions/channel_actions';
import { connect } from 'react-redux';
import ChannelForm from './channel_form';
// import DMCreateContainer from

function Modal({modal, closeModal}) {
  if(!modal) {
    return null
  }

  let component;
  switch (modal) {
    case 'channel':
      component = <ChannelForm closeModal={closeModal} createChannel={createChannel} />
    break;
    case 'dm':
      component = <h1>DMs</h1>
      break;
    default:
      break;
  }

  return (
    <div className='modal-background' >
      <div className='modal'>
        {component}
      </div>
    </div>
  )
}

const msp = state => {
  return{
    modal: state.entities.ui.modal
  }
}

const mdp = dispatch => {
  debugger
  return {
    closeModal: () => dispatch(closeModal()),
    createChannel: (channel) => dispatch(createChannel(channel))
  }
}

export default connect(msp, mdp)(Modal)
