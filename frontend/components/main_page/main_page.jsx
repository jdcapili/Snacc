import React from 'react';
import SideBarContainer from './side_bar/side_bar_container';
import ChatRoomContainer from './main_content/chatroom_container';
import { ProtectedRoute } from '../../util/route_util';

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
        {/* <MainContentContainer /> */}
        {/* <Route path='/main/channels/:channelId' component={ChatRoomContainer} /> */}
          <ProtectedRoute exact path='/main/channels/:channelId' component={ChatRoomContainer} />
      </div>
    </div>
    </>

  }
}

export default MainPage;