import React from 'react';
import { NavLink } from 'react-router-dom';


class SidebarDmItem extends React.Component {
  constructor(props) {
    
    super(props);
    this.state = {
      toggleStatus: 'dropdown-options-content',
      toggleLink: ''
    }

    this.dropOptionsClick = this.dropOptionsClick.bind(this);
    this.toggleActiveLink = this.toggleActiveLink.bind(this);
    this.removeGroup = this.removeGroup.bind(this)
    this.dropOptionsHide = this.dropOptionsHide.bind(this);
  }

  dropOptionsClick(e) {
    e.preventDefault();
    this.props.history.push(`/main/dm_groups/${this.props.dmGroup.id}`)
    if (this.state.toggleStatus.indexOf("drop-show2") === -1) {

      this.setState({
        toggleStatus: "dropdown-options-content drop-show2",
      })
    } else {

      this.setState({
        toggleStatus: "dropdown-options-content",
      })
    }
  }

  dropOptionsHide(e) {
    e.preventDefault();
    if (this.state.toggleStatus.indexOf("drop-show2") !== -1) {
      this.setState({
        toggleStatus: "dropdown-options-content",
      })
    }
  }

  toggleActiveLink() {

    let stat = this.state.toggleLink === '' ? 'active' : '';
    this.setState({ toggleLink: stat })
  }

  removeGroup(e){
    e.stopPropagation();
    if(this.props.location.pathname === `/main/dm_groups/${this.props.dmGroupId}`){
      this.props.history.goBack();
    }
    this.props.removeGroup(this.props.dmGroup.id)
  }

  render() {

    if(typeof this.props !== 'undefined'){
    let { dmGroup, members } = this.props
    let dmGroup_name = '';
    members.forEach((member,idx) => {
      
      if(idx === 0 && member){dmGroup_name += `${member.display_name}`}
      else {dmGroup_name += `, ${member.display_name}`}
    }) // would be the name of members except current user

    return <li key={dmGroup.id} >

        
      <NavLink to={`/main/dm_groups/${dmGroup.id}`} onContextMenu={this.dropOptionsClick} onMouseLeave={this.dropOptionsHide}>
        <div className='status'></div>
        <div className="chat-name">{dmGroup_name}</div></NavLink>

 
        <nav className={this.state.toggleStatus} onMouseLeave={this.dropOptionsClick} >
          <button onClick={this.removeGroup}>
            Close Group
            </button>
        </nav>


    </li>
    }
  }
}

export default SidebarDmItem