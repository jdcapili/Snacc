import React from 'react';
import MessageFormContainer from './message_form_container';
import MessageContainer from './message_container';
import MainHeaderContainer from '../main_header/main_header_container';

class ChannelChat extends React.Component{
  constructor(props){
    super(props);
    this.bottom = React.createRef();

    
  }
  componentDidMount(){
    
    if (typeof this.props.channel === 'undefined' 
    || this.props.messages.length < 1 
      || this.props.messages.length !== this.props.channel.message_ids.length) {
      
      // this.props.fetchChannelMessages(this.props.channel.id)
      this.props.fetchChannel(this.props.match.params.channelId)
      .then((payload) => {
        if (payload.messages.length > 0 && this.props.channel.subscriber_ids.includes(this.props.currentUser.id)) {
          this.bottom.current.scrollIntoView()
        }
      })
    }

  }

  componentDidUpdate(prevProps){
    
    if (prevProps.location.pathname !== this.props.location.pathname ){

      
      this.props.fetchChannel(this.props.match.params.channelId)
        .then((payload) => {

          if (payload.messages.length > 0 && this.props.channel.subscriber_ids.includes(this.props.currentUser.id)) {
            this.bottom.current.scrollIntoView()
          }
      })
      
    }else{
      if (prevProps.messages.length < this.props.messages.length && this.props.channel.subscriber_ids.includes(this.props.currentUser.id)) {
        
        this.bottom.current.scrollIntoView()

      }
    }


        
  }

  render(){
   
    let channel_id = typeof this.props.channel === 'undefined' ? '' : this.props.channel.id
    let subscriber_ids = typeof this.props.channel === 'undefined' ? '' : this.props.channel.subscriber_ids
    let currentUser_id = typeof this.props.currentUser === 'undefined' ? '' : this.props.currentUser.id
    



    let messageList = [];
    let channelChatShow = [];
    if(this.props.messages.length > 0 && subscriber_ids.includes(currentUser_id)){
      messageList = this.props.messages.map(message => {
        return (
          <li className="message-item" key={message.id}>
            <MessageContainer message={message} channel={this.props.channel}/>
            <div ref={this.bottom} />
          </li>
        )
      });
    }
    
    if(subscriber_ids.includes(currentUser_id)){
      channelChatShow = <>< div className='message-list' >
        {messageList}
      </div >
      <MessageFormContainer channel_id={channel_id} currentUser_id={currentUser_id} bottom={this.bottom} />
      </>;
    }else{
      let joinText = this.props.channel ? <h3>Join {this.props.channel.channel_name}</h3> : <h3>Join Channel</h3>
      channelChatShow = <> <div className='non-subscriber'>
        {joinText}
        <img src={window.spc}/>
        <h3>to participate</h3>
        </div></>
    }
    
    return (
      <div className='chatroom-container'>
        <MainHeaderContainer channelId={channel_id}/>


        {channelChatShow}
      </div>
    )
  }
}

export default ChannelChat;