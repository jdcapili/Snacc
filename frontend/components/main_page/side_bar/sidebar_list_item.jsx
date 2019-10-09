import React from 'react';
import { NavLink } from 'react-router-dom';
import {deleteChannel} from '../../../actions/channel_actions'

class SidebarListItem extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      toggleStatus: 'dropdown-options-content'
    }

    this.dropOptionsClick = this.dropOptionsClick.bind(this);
  }

  dropOptionsClick(e) {
    e.preventDefault();
    debugger
    if (this.state.toggleStatus.indexOf("drop-show") === -1) {

      this.setState({
        toggleStatus: "dropdown-options-content drop-show",
      })
    } else {

      this.setState({
        toggleStatus: "dropdown-options-content",
      })
    }
  }

  render(){
    let {channel} = this.props
    return <li key={channel.id} >
      <NavLink to={`/main/channels/${channel.id}`} onContextMenu={this.dropOptionsClick} 
        onMouseLeave={this.state.toggleStatus === "dropdown-options-content drop-show" ? this.dropOptionsClick : null}>
        # {channel.channel_name}</NavLink>

      <nav className={this.state.toggleStatus} onMouseLeave={this.dropOptionsClick} >
        <button onClick={() => dispatch(deleteChannel(channel.id))}>
          Leave Channel
          </button>
      </nav>

    </li>
  }
}

export default SidebarListItem