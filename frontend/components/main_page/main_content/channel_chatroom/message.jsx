import React from 'react'

class Message extends React.Component {
  constructor(props){
    super(props);
    this.timeFormat = this.timeFormat.bind(this);
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

  render(){
    let {message} = this.props
    let create_time = this.timeFormat(message.created_at)
    return <>
    <div className='user-avatar'><img src={window.personIcon} /></div>
    <div className="message-info">
      <div><h3>{message.author.display_name}</h3><span>{create_time}</span></div>
      <p>{message.body}</p>
    </div>
    </>
  }
}

export default Message;