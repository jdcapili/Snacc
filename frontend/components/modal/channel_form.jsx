import React from 'react';

class ChannelForm extends React.Component {
  constructor(props){
  
    super(props)
    this.state = {
      channel_name: '',
      usersToAdd: [],
      userIdsToAdd: [props.currentUserId],
      usersList: this.props.users
    }

    this.selectMembers = this.selectMembers.bind(this);
    this.update = this.update.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  selectMembers(user) {

    let newArr = this.state.usersToAdd;
    newArr.push(<span key={user.id}>{user.display_name}</span>)
    let newIdArr = this.state.userIdsToAdd
    newIdArr.push(user.id)
    let newList = this.state.usersList.filter(function (el) { return el.id !== user.id; })


    this.setState({
      usersToAdd: newArr,
      userIdsToAdd: newIdArr,
      usersList: newList
    })
  }

  update(field){
    return (e) => this.setState({[field]: e.target.value})
  }

  handleClick(e){
    e.preventDefault();
    
    this.props.createChannel(this.state).then(this.props.closeModal())

  }

  render(){

    let userList = this.state.usersList.map((user) => {
      if (this.props.currentUserId !== user.id) {
        return <li key={user.id} onClick={() => this.selectMembers(user)}>{user.display_name}</li>
      }
    }) 

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
            <label htmlFor="members">Select Members</label>
              <div className='member-selection'>
                <div>{this.state.usersToAdd}</div>
              </div>
              <ul>
                {userList}
              </ul>

            <input type="submit" value="Create!"/>
            </form>


          </div>
       </div>
      </div>
    </>
  }
}

export default ChannelForm;