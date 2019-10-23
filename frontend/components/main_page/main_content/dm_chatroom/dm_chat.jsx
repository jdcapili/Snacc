import React from 'react';
import MessageFormContainer from './message_form_container';
import MessageContainer from './message_container';
import DmMainHeaderContainer from '../main_header/dm_main_header_container';

class DmChannelChat extends React.Component {
  constructor(props) {
    super(props);
    this.bottom = React.createRef();


  }
  // componentDidMount() {

  //   if (typeof this.props.channel === 'undefined' || this.props.messages.length < 1) {

  //     // this.props.fetchChannelMessages(this.props.channel.id)
  //     this.props.fetchChannel(this.props.match.params.channelId)
  //       .then((payload) => {
  //         if (payload.messages.length > 0) {
  //           this.bottom.current.scrollIntoView()
  //         }
  //       })
  //   }

  // }

  // componentDidUpdate(prevProps) {

  //   if (prevProps.location !== this.props.location || prevProps.messages.length < this.props.messages.length) {

  //     this.props.fetchChannelMessages(this.props.channel.id).then((payload) => {
  //       if (payload.messages.length > 0) {
  //         this.bottom.current.scrollIntoView()
  //       }
  //     }
  //     )
  //   }



  // }

  render() {

    // let dm_group_id = typeof this.props.channel === 'undefined' ? '' : this.props.channel.id
    // let subscriber_ids = typeof this.props.channel === 'undefined' ? '' : this.props.channel.subscriber_ids
    // let currentUser_id = typeof this.props.currentUser === 'undefined' ? '' : this.props.currentUser.id




    // let messageList = [];
    // if (this.props.messages.length > 0 && subscriber_ids.includes(currentUser_id)) {
    //   messageList = this.props.messages.map(message => {
    //     return (
    //       <li className="message-item" key={message.id}>
    //         <MessageContainer message={message} channel={this.props.channel} />
    //         <div ref={this.bottom} />
    //       </li>
    //     )
    //   });
    // }

    return (
      <div className='chatroom-container'>
        <DmMainHeaderContainer />


        <div className='message-list'>
          MESSAGES
        </div>
        <MessageFormContainer/>
      </div>
    )
  }
}

export default DmChannelChat;