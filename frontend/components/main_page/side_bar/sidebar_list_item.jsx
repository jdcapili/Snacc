import React from 'react';
import { NavLink } from 'react-router-dom';
import {deleteChannel} from '../../../actions/channel_actions'

class SidebarListItem extends React.Component {
  constructor(props){
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
    // debugger
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
    this.setState({toggleLink: stat})
  }

  render(){
    let {channel} = this.props
    let channel_name = channel.channel_name.length > 10 ? channel.channel_name.slice(0,9) + '...' : channel.channel_name
    return <li key={channel.id}>
      <NavLink to={`/main/channels/${channel.id}`} onContextMenu={this.dropOptionsClick}
        onMouseLeave={this.state.toggleStatus === "dropdown-options-content drop-show2" ? this.dropOptionsClick : null}>
        # {channel_name}</NavLink>
      
      <nav className={this.state.toggleStatus} onMouseLeave={this.dropOptionsClick} >
        <button onClick={() => dispatch(deleteChannel(channel.id))}>
          Leave Channel
          </button>
      </nav>

    </li>
  }
}

export default SidebarListItem