import React from 'react';
import SideBarContainer from './side_bar/side_bar_container';
import ChannelChatContainer from './main_content/channel_chatroom/channel_chat_container';
import { ProtectedRoute } from '../../util/route_util';
import {withRouter, Route} from 'react-router-dom';

class MainPage extends React.Component {
  constructor(props){
    super(props);
  }

  render(){

    return <>
    <div className='main-page'>
      <div className="side-nav-bar">
        <SideBarContainer />
      </div>

      <div className="main-content-container">
          <Route path='/main/channels/:channelId' component={ChannelChatContainer} />
      </div>
    </div>
    </>

  }
}

export default MainPage;