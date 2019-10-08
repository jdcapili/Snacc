import React from 'react';
import MessageForm from './message_form';

class ChannelChat extends React.Component{
  constructor(props){
    super(props);
    this.bottom = React.createRef();
  }
  componentDidMount(){
    // debugger
    if (this.props.messages.length < 1 && typeof this.props.channel !== 'undefined') {
      this.props.fetchChannelMessages(this.props.channel.id).then(() => this.bottom.current.scrollIntoView())
    }
  }

  componentDidUpdate(){
    // debugger
    if (this.props.messages.length < 1){
      this.props.fetchChannelMessages(this.props.channel.id).then(() => this.bottom.current.scrollIntoView())
    } else {
      this.bottom.current.scrollIntoView()
    }

        
  }

  render(){
    
    let channel_id = typeof this.props.channel === 'undefined' ? '' : this.props.channel.id
    let currentUser_id = typeof this.props.currentUser === 'undefined' ? '' : this.props.currentUser.id
    
    // debugger
    let messageList = [];
    if(this.props.messages.length > 0){
    messageList = this.props.messages.map(message => {
      return (
        <li key={message.id}>
          <h3>{message.author.display_name}</h3>
          {message.body}
          <div ref={this.bottom} />
        </li>
      )
    });
    }

    return (
      <div className='chatroom-container'>
        <div>ChatRoom</div>


        <div className='message-list'>
          {messageList}
        </div>
        <MessageForm channel_id={channel_id} currentUser_id={currentUser_id} />
      </div>
    )
  }
}

export default ChannelChat;