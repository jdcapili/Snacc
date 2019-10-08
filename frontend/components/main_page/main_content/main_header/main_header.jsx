import React from 'react';

class MainHeader extends React.Component {
  


  render(){
    let channel_name = '';
    if(this.props.channel) channel_name = this.props.channel.channel_name; 
   
    return <>
      <div className='main-content-header'>
        <h1 >{channel_name}</h1>
        <p>channel/dm infos will be here</p>
      </div>
    </>
  }
}

export default MainHeader