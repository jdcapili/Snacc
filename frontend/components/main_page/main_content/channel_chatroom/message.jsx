import React from 'react'
import {findDOMNode} from 'react-dom'

class Message extends React.Component {
  constructor(props){


    super(props);
    this.state = {
      toUpdate: this.props.message.body,
      messageId: this.props.message.id,
      editState: null,
      messageOptions: 'hidden'
    }
    this.timeFormat = this.timeFormat.bind(this);
    this.editClick = this.editClick.bind(this);
    this.update = this.update.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.toggleOption = this.toggleOption.bind(this)
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

  editClick(){
 
    if (this.props.author.id === this.props.currentUserId){
      let toggleEdit = this.state.editState === 'edit-message' ? null : 'edit-message'
      this.setState({editState: toggleEdit, messageOptions: 'hidden'})
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

    let channel_id = this.props.channel.id;

    App.cable.subscriptions.subscriptions.forEach((subs, idx) => {
  
      if (JSON.parse(subs.identifier).id === channel_id) {
    
        App.cable.subscriptions.subscriptions[idx].update({
          message: message
        })
      }
    })

    

    this.setState({ editState: null })
  }

  handleDelete(e) {
    e.preventDefault();
    let message = {
      id: this.props.message.id,
      currentUserId: this.props.currentUserId
    }

    let channel_id = this.props.channel.id;

    App.cable.subscriptions.subscriptions.forEach((subs, idx) => {

      if (JSON.parse(subs.identifier).id === channel_id) {

        App.cable.subscriptions.subscriptions[idx].delete({
          message: message
        })
      }
    })



    this.setState({ editState: null })
  }

  toggleOption(e){
    if(!this.state.editState){
      this.setState({messageOptions:
        this.state.messageOptions==='hidden' ? 
        'visible' : 'hidden'})
    }else{
      this.setState({
        messageOptions: 'hidden'
      })
    }
    
  }

  componentDidMount(){
    let test = findDOMNode(this);
    
    test.parentElement.onmouseenter = this.toggleOption;
    test.parentElement.onmouseleave = this.toggleOption;
    
  }

  render(){

    let {message,author} = this.props
    let create_time = this.timeFormat(message.created_at)
    let editOptions;

    if(author.id === this.props.currentUserId){
      editOptions = <div className="author-options" style={{visibility: this.state.messageOptions}}>
        <i className="fas fa-edit fa-sm" onClick={this.editClick}></i>
        <i className="fas fa-trash-alt fa-sm" onClick={this.handleDelete}></i>
      </div>
    }


    if(this.state.editState){
      return <>
      <div className='user-avatar'><img src={window.personIcon} /></div>
      <div className="message-info">
          <div>
            <h3>{author.display_name}</h3>
            <span>{create_time}</span>
            {editOptions}
          </div>
        <form onSubmit={this.handleClick}>
          <input type="text" value={this.state.toUpdate} onChange={this.update}/>
          
          <div className='form-buttons'>
            <input type="submit" value="Update"/>
            <input type='button' onClick={this.editClick} value='Close' />
          </div>
        </form>
      </div>
      </>
    } else {
      
      return <>
        <div className='user-avatar'><img src={window.personIcon} /></div>
        <div className="message-info">
          <div>
            <h3>{author.display_name}</h3>
            <span>{create_time}</span>
            {editOptions}
          </div>
          <p onDoubleClick={this.editClick}>{message.body}</p>
        </div>
      </>
    }
  }
}

export default Message;