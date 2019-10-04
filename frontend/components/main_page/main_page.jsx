import React from 'react';
import SideBarContainer from './side_bar/side_bar_container';

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
      </div>
    </div>
    </>

  }
}

export default MainPage;