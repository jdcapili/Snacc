import React from 'react';
import { withRouter, Router } from 'react-router-dom';


class SideBar extends React.Component {
  constructor(props){
    // debugger
    super(props);
    this.state = {
      dropStat: `dropdown-sidebar-content`,
      h3Stat: ''
    }
    this.dropDownClick = this.dropDownClick.bind(this);
    // this.sidebarRedirect = this.sidebarRedirect.bind(this  );
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
    // debugger
    this.props.fetchChannels();
   
  }

  // sidebarRedirect(field,id){
  //   debugger
  //   return () => this.props.history.push(`/main/channels/${id}`)
  // }

  render(){
    let { currentUser } = this.props
    // debugger
    let userChannels = Object.values(this.props.channels).map((channel) => {
      return <li key={channel.id} onClick={() => this.props.history.push({pathname: '/main/channels/1', state: channel})}># {channel.channel_name}</li>
    })
    // debugger
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
        <h4 onClick={this.props.openModal}>+ Add a Channel</h4>
      </div>

    </>
  }
}

export default withRouter(SideBar)