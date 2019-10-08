import React from 'react';

class ChannelForm extends React.Component {
  constructor(props){
    // 
    super(props)
    this.state = {
      channel_name: ''
    }
    this.update = this.update.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  update(field){
    return (e) => this.setState({[field]: e.target.value})
  }

  handleClick(e){
    e.preventDefault();
    
    this.props.createNewChannel(this.state).then(this.props.closeModal())

  }

  render(){
    return <>
      <div className="create-form">
        <div>
          <i className="fas fa-times" onClick={this.props.closeModal}></i>
          <div onSubmit={this.handleClick} className="inner-div">
            <h1>Create a Channel</h1>
            <p>Channels are where your members communicate. They're best when organized around a topic -- #AppAcademyProjects, for example. :3</p>
            <form>
            <label htmlFor="name">Name</label>
            <input onChange={this.update('channel_name')} 
            type="text" id="name" 
            placeholder="# e.g AppAcademyProjects"
            value={this.state.channel_name} />
            <input type="submit" value="Create!"/>
            </form>
          </div>
       </div>
      </div>
    </>
  }
}

export default ChannelForm;