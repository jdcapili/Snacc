import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { createChannel } from '../../actions/channel_actions';
import { connect } from 'react-redux';
import ChannelForm from './channel_form';
import ChannelOptionsContainer from './channel_options';
import GroupFormContainer from './group_form_container';

const msp = state => {
  return {
    modal: state.entities.ui.modal
  }
}

const mdp = dispatch => {
  // 
  return {
    closeModal: () => dispatch(closeModal()),
    createNewChannel: (channel) => dispatch(createChannel(channel))
  }
}

function Modal({modal, closeModal,createNewChannel}) {
  if(!modal) {
    return null
  }
  
  let component;
  let modType;
  switch (modal.type) {
    case 'channel':
      modType = 'form';
      component = <ChannelForm closeModal={closeModal} createNewChannel={createNewChannel} />
    break;
    case 'dm':
      modType = 'form';
      component = <GroupFormContainer />
      break;
    case 'channelOptions':
      modType = 'button';
      component = <ChannelOptionsContainer channelId={modal.datum} closeModal={closeModal}/>
        break;
    default:
      break;
  }

  return (
    <div className={`modal-background-${modType}`}>
      <div className='modal'>
        {component}
      </div>
    </div>
  )
}

export default connect(msp, mdp)(Modal)
