import React from 'react';
import { deleteChannel } from '../../actions/channel_actions';
import {connect} from 'react-redux'


const msp = (state,ownProps) => {
  debugger
  return {channelId: ownProps.channelId, 
    closeModal: ownProps.closeModal}
}

const mdp = dispatch => {
  return{
    removeChannel: (id) => dispatch(deleteChannel(id)),

  }
}

const ChannelOptions = (props) => {
  debugger
  let {removeChannel,channelId, closeModal} = props
  return <div className='channel-options'>
    <button onClick={()=> removeChannel(channelId)
      .then(() => closeModal())}>Delete Channel</button>
  </div>
}

export default connect(msp,mdp)(ChannelOptions)