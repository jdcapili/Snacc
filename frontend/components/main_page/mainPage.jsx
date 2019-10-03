import React from 'react';

class MainPage extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return <>
      <div className="side-nav-bar">
        This is the side nav bar
      </div>

      <div className="main-content-container">
        This is the main content container
      </div>
    </>

  }
}

export default MainPage;