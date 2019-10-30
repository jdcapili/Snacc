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
  }

  dropOptionsClick(e) {
    e.preventDefault();

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

  toggleActiveLink() {

    let stat = this.state.toggleLink === '' ? 'active' : '';
    this.setState({ toggleLink: stat })
  }

  render() {

    if(typeof this.props !== 'undefined'){
    let { dmGroup, members } = this.props
    let dmGroup_name = '';
    members.forEach((member,idx) => {
      
      if(idx === 0){dmGroup_name += `${member.display_name}`}
      else {dmGroup_name += `, ${member.display_name}`}
    }) // would be the name of members except current user

    return <li key={dmGroup.id} >

        
      <NavLink to={`/main/dm_groups/${dmGroup.id}`} onContextMenu={this.dropOptionsClick}>
        <div className='status'></div>
        {dmGroup_name}</NavLink>
   
      <nav className={this.state.toggleStatus} onMouseLeave={this.dropOptionsClick} >
        <button onClick={() => this.props.deleteDmGroup(dmGroup.id)}>
          Delete Group
          </button>
      </nav>

    </li>
    }
  }
}

export default SidebarDmItem