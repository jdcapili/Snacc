import React from 'react';
import { withRouter, Router, NavLink } from 'react-router-dom';
import subscribeChannels from './channel_index';
import SidebarListItem from './sidebar_list_item';
import SidebarDmItemContainer from './sidebar_dm_item_container';


class SideBar extends React.Component {
  constructor(props){
    
    super(props);
    this.state = {
      dropStat: `dropdown-sidebar-content`,
      h3Stat: '',
      buttonStat: `dropdown-options-content`
    }
    this.dropDownClick = this.dropDownClick.bind(this);
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


  componentDidMount(){
    
    let {currentUser,receiveMessage} = this.props
    
    this.props.fetchAllUsers().then(() => 
    this.props.fetchChannels(currentUser.id).then((payload) => {
      subscribeChannels(payload.channels,currentUser.subscribed_channel_ids,receiveMessage)
    })
    ).then(() =>
    this.props.fetchDmGroups()
    );
  }

  // componentDidUpdate(prevProps){
  //   if(Object.values(prevProps.channels).length < Object.values(this.props.channels).length){
  //     subscribeChannels(Object.values(this.props.channels),
  //      this.props.currentUser.subscribed_channel_ids);
  //   }
  // }

  openChannelOptions(channelId){
    
    return (e) => {
      
    e.preventDefault();
    
    this.props.openModal('channelOptions',channelId)
    }
  }


  render(){
    let { currentUser } = this.props

    let userChannels = Object.values(this.props.channels).map((channel) => {
      return <SidebarListItem channel={channel}  key={channel.id} deleteChannel={this.props.deleteChannel}/>
    })

    let userGroups = Object.values(this.props.dmGroups).map((dmGroup) => {
      return <SidebarDmItemContainer dmGroupId={dmGroup.id} key={dmGroup.id} deleteDmGroup={this.props.deleteDmGroup} />
    })
    


    return <>

      <div className='dropdown-sidebar' >
        <div onClick={this.dropDownClick} className="userInfo">
          <div><h3 className={this.state.h3Stat}>S n a c c</h3><img src={window.expandArrow} /></div>
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

      <div className="dm-groups">
        <div><h3>Direct Messages</h3><button onClick={() => this.props.openModal('dm')}>+</button></div>
        <ul>
          {userGroups}
        </ul>
      </div>

    </>
  }
}

export default SideBar