import React from 'react';
import MessageForm from './message_form';
import Message from './message';
import MainHeader from '../main_header/main_header';

class ChannelChat extends React.Component{
  constructor(props){
    super(props);
    this.bottom = React.createRef();
    
  }
  componentDidMount(){
    
    if (typeof this.props.channel === 'undefined' || this.props.messages.length < 1) {
      
      // this.props.fetchChannelMessages(this.props.channel.id)
      this.props.fetchChannel(this.props.match.params.channelId)
      .then((payload) => {
        if (payload.messages.length > 0) {
          this.bottom.current.scrollIntoView()
        }
      })
    } 
  }

  componentDidUpdate(prevProps){
    // debugger
    if (prevProps.location !== this.props.location || prevProps.messages.length < this.props.messages.length){
      
      this.props.fetchChannelMessages(this.props.channel.id).then((payload) => {
        if(payload.messages.length > 0){
        this.bottom.current.scrollIntoView()}
      }
      )
      
    } 
        
  }

  render(){
    // 
    let channel_id = typeof this.props.channel === 'undefined' ? '' : this.props.channel.id
    let currentUser_id = typeof this.props.currentUser === 'undefined' ? '' : this.props.currentUser.id
    
    // 
    let messageList = [];
    if(this.props.messages.length > 0){
    messageList = this.props.messages.map(message => {
      return (
        <li key={message.id}>
          <Message message={message}/>
          <div ref={this.bottom} />
        </li>
      )
    });
    }

    return (
      <div className='chatroom-container'>
        <MainHeader channel={this.props.channel} />


        <div className='message-list'>
          {messageList}
        </div>
        <MessageForm channel_id={channel_id} currentUser_id={currentUser_id} />
      </div>
    )
  }
}

export default ChannelChat;