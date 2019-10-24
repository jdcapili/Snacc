import React from 'react';
import { withRouter, Router, NavLink } from 'react-router-dom';
import subscribeChannels from './channel_index';
import subscribeDmGroups from './dm_index';
import SidebarListItemContainer from './sidebar_list_item_container';
import SidebarDmItemContainer from './sidebar_dm_item_container';


class SideBar extends React.Component {
  constructor(props){
    
    super(props);
    this.state = {
      dropStat: `dropdown-sidebar-content`,
      h3Stat: '',
      buttonStat: `dropdown-options-content`
    }
    this.userInfo = React.createRef();

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
      this.props.fetchDmGroups().then((payload) => {
        subscribeDmGroups(payload.dmGroups, currentUser.dm_group_ids, receiveMessage)
      })
    );
  }

  componentDidUpdate(prevProps) {
    
    if (typeof this.props.currentUser !== "undefined"){
      
      let { currentUser, receiveMessage } = this.props;
      if(this.props.currentUser.subscribed_channel_ids.length !== prevProps.currentUser.subscribed_channel_ids.length){      
      
        this.props.fetchChannels(currentUser.id).then((payload) => {
        subscribeChannels(payload.channels, currentUser.subscribed_channel_ids, receiveMessage)
      })
      }

      if (this.props.currentUser.dm_group_ids.length !== prevProps.currentUser.dm_group_ids.length) {
        
        this.props.fetchDmGroups().then((payload) => {
          subscribeDmGroups(payload.dmGroups, currentUser.dm_group_ids, receiveMessage)
        })
      }
      
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
      return <SidebarListItemContainer channelId={channel.id}  key={channel.id}/>
    })

    let userGroups = Object.values(this.props.dmGroups).map((dmGroup) => {
      return <SidebarDmItemContainer dmGroupId={dmGroup.id} key={dmGroup.id}/>
    })
    


    return <>

      <div className='dropdown-sidebar' >
        <div onClick={this.dropDownClick} className="userInfo">
          <div><h3 className={this.state.h3Stat}>S n a c c</h3><img src={window.expandArrow} /></div>
          <h4>{currentUser.display_name}</h4>
        </div>
        

        <nav className={this.state.dropStat} tabIndex='1' onMouseLeave={this.dropDownClick} ref={this.userInfo}>
          <h3>{currentUser.display_name}</h3>
          <h4>{currentUser.email}</h4>
          <button onClick={this.props.logout}>Sign Out</button>
        </nav>
      </div>

      <div className="channel-groups">
        <div onClick={() => this.props.openModal('channel')}><h3>Channels</h3><i className="fas fa-plus-circle"></i></div>
        <ul>
          {userChannels}
        </ul>
        <h4 onClick={() => this.props.openModal('channel')}>+ Add a Channel</h4>
      </div>

      <div className="dm-groups">
        <div onClick={() => this.props.openModal('dm')}><h3>Direct Messages</h3><i className="fas fa-plus-circle"></i></div>
        <ul>
          {userGroups}
        </ul>
      </div>

    </>
  }
}

export default SideBar