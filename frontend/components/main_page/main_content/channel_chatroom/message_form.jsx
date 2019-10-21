import React from 'react';

class MessageForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {body: ''  }
  }

  update(field) {
    return e =>
      this.setState({ [field]: e.target.value })
  }

  handleSubmit(e){

    e.preventDefault();
    console.log(App.cable.subscriptions.subscriptions[this.props.subId])
    App.cable.subscriptions.subscriptions[this.props.subId].speak({ message: this.state.body,
    channel_id: this.props.channel_id,
    author_id: this.props.currentUser_id })
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