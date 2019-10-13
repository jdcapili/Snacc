import React from 'react';

class GroupForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      usersToAdd: [],
      userIdsToAdd:[props.currentUserId],
      usersList: this.props.users
    }

    this.selectMembers = this.selectMembers.bind(this);
    this.handleCreate = this.handleCreate.bind(this);
  }

  selectMembers(user){
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

  handleCreate(){
    this.props.createDmGroup(this.state.userIdsToAdd).then(this.props.closeModal())
  }

  render() {

    let userList = this.state.usersList.map((user) => {
      if(this.props.currentUserId !== user.id){
      return <li key={user.id} onClick={() => this.selectMembers(user)}>{user.display_name}</li>
      }
    }) 

    return <>
      <div className="create-form">
        <div>
          <i className="fas fa-times" onClick={this.props.closeModal}></i>
          <div onSubmit={this.handleClick} className="inner-div">
            <h1>Create a Direct Message Group</h1>
            <div className='member-selection'>
              <div>{this.state.usersToAdd}</div>
            </div>
            <button onClick={this.handleCreate}>Create!</button>
            <ul>
              {userList}
            </ul>
          </div>
        </div>
      </div>
    </>
  }
}

export default GroupForm