import React from 'react';

class MessageForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {body: ''  }
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e =>
      this.setState({ [field]: e.target.value })
  }

  handleSubmit(e){

    e.preventDefault();
    
    let {channel, channelType, currentUser} = this.props;
    
    App.cable.subscriptions.subscriptions.forEach((subs,idx) => {
      let identifier = JSON.parse(subs.identifier);
      
      if((identifier.channel === channelType) && (identifier.id === channel.id)){
        
        App.cable.subscriptions.subscriptions[idx].speak({
          message: this.state.body,
          channel_id: channel.id,
          author_id: currentUser.id
        })

        
      }
    })

    this.setState({ body: '' });
  }

  render(){
  
    return (
      <div className='message-form'>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input type="text" 
          value={this.state.body}
          onChange={this.update('body')}
          placeholder='type message here!'
          />
          <input type="submit"/>
        </form>
      </div>
    )
  }
}

export default MessageForm