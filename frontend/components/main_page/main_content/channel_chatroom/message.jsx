import React from 'react'

class Message extends React.Component {
  constructor(props){


    super(props);
    this.state = {
      toUpdate: this.props.message.body,
      messageId: this.props.message.id,
      editState: null
    }
    this.timeFormat = this.timeFormat.bind(this);
    this.editDoubleClick = this.editDoubleClick.bind(this);
    this.update = this.update.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  timeFormat(jsonTime){
    let datetime = new Date(JSON.parse(`\"` + jsonTime + `\"`));
    let hours = datetime.getHours();
    let ampm = hours >= 12 ? 'pm' : 'am';
      hours = hours % 12;
      hours = hours ? hours : 12;
    let minutes = datetime.getMinutes();
      if(minutes < 10){ minutes = `0${minutes}`}
    return hours+":"+minutes+ampm
  }

  editDoubleClick(){
 
    if (this.props.message.author.author_id === this.props.currentUserId){
      this.setState({editState: 'edit-message'})
    }
  }

  update(e){
    e.preventDefault();
    this.setState({toUpdate: e.target.value})
  }

  handleClick(e){
    e.preventDefault();
    let message = {
      body: this.state.toUpdate,
      id: this.props.message.id
    }
    this.props.updateMessage(message).then(this.setState({editState: null}));
  }

  render(){
    let {message} = this.props
    let create_time = this.timeFormat(message.created_at)

    if(this.state.editState){
      return <>
      <div className='user-avatar'><img src={window.personIcon} /></div>
      <div className="message-info">
        <div><h3>{message.author.author_name}</h3><span>{create_time}</span></div>
        <form onSubmit={this.handleClick}>
          <input type="text" value={this.state.toUpdate} onChange={this.update}/>
          
          <input type="submit" value="update"/>
          <button onClick={this.editDoubleClick}>Close</button>
        </form>
      </div>
      </>
    } else {
      return <>
        <div className='user-avatar'><img src={window.personIcon} /></div>
        <div className="message-info">
          <div><h3>{message.author.author_name}</h3><span>{create_time}</span></div>
          <p onDoubleClick={this.editDoubleClick}>{message.body}</p>
        </div>
      </>
    }
  }
}

export default Message;