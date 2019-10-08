import React from 'react';
import { withRouter, Router, NavLink } from 'react-router-dom';
import subscribeChannels from './channel_index';


class SideBar extends React.Component {
  constructor(props){
    
    super(props);
    this.state = {
      dropStat: `dropdown-sidebar-content`,
      h3Stat: '',
      buttonStat: `dropdown-options-content`
    }
    this.dropDownClick = this.dropDownClick.bind(this);
    this.dropOptionsClick = this.dropOptionsClick.bind(this);
    // this.sidebarRedirect = this.sidebarRedirect.bind(this);
    // this.subscriberHelper = this.subscriberHelper.bind(this);
    // this.openChannelOptions = this.openChannelOptions.bind(this);
  }

  dropDownClick(){
    if(this.state.dropStat.indexOf("drop-show") === -1){
   
      this.setState({
        dropStat:  "dropdown-sidebar-content drop-show",
      h3Stat: 'active' })
      } else {

      this.setState({
        dropStat: "dropdown-sidebar-content",
        h3Stat: ''
      })
    }
  }

  dropOptionsClick(e) {
    e.preventDefault();
    
    if (this.state.buttonStat.indexOf("drop-show") === -1) {

      this.setState({
        buttonStat: "dropdown-options-content drop-show",
      })
    } else {

      this.setState({
        buttonStat: "dropdown-options-content",
      })
    }
  }

  optionsHover(){
    if (this.state.buttonStat.indexOf("drop-show") === -1) {

      this.setState({
        buttonStat: "dropdown-options-content drop-show",
      })
    } else {

      this.setState({
        buttonStat: "dropdown-options-content",
      })
    }
  }

  componentDidMount(){
    
    this.props.fetchChannels(this.props.currentUser.id)
    
  }

  componentDidUpdate(prevProps){
    if(Object.values(prevProps.channels).length < Object.values(this.props.channels).length){
      subscribeChannels(Object.values(this.props.channels),
       this.props.currentUser.subscribed_channel_ids);
    }
  }

  openChannelOptions(channelId){
    
    return (e) => {
      
    e.preventDefault();
    
    this.props.openModal('channelOptions',channelId)
    }
  }


  render(){
    let { currentUser } = this.props

    let userChannels = Object.values(this.props.channels).map((channel) => {
      return <li 
        key={channel.id} onContextMenu={this.dropOptionsClick}
      ><NavLink to={`/main/channels/${channel.id}`}># {channel.channel_name}</NavLink>
      
        <nav className={this.state.buttonStat} onMouseLeave={this.dropOptionsClick}>
          <h3>{currentUser.display_name}</h3>
          <h4>{currentUser.email}</h4>
          <button onClick={this.props.logout}>Sign Out</button>
        </nav>

      </li>
    })
    


    return <>

      <div className='dropdown-sidebar' >
        <div onClick={this.dropDownClick} className="userInfo">
          <h3 className={this.state.h3Stat}>S n a c c</h3>
          <h4>{currentUser.display_name}</h4>
        </div>
        

        <nav className={this.state.dropStat}>
          <h3>{currentUser.display_name}</h3>
          <h4>{currentUser.email}</h4>
          <button onClick={this.props.logout}>Sign Out</button>
        </nav>
      </div>

      <div className="channel-groups">
        <h3>Channels</h3>
        <ul>
          {userChannels}
        </ul>
        <h4 onClick={() => this.props.openModal('channel')}>+ Add a Channel</h4>
      </div>

    </>
  }
}

export default SideBar