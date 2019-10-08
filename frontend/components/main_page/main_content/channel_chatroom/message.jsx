import React from 'react'

class Message extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    let {message} = this.props

    return <>
      <h3>{message.author.display_name}</h3>
      {message.body}
    </>
  }
}

export default Message;