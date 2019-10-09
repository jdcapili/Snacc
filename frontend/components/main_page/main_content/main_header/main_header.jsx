import React from 'react';

class MainHeader extends React.Component {
  constructor(props){
    super(props);

  }
  

  render(){
    let channel_name = '';
    
    if (this.props.channel) {
      let {channel} = this.props;
      channel_name = this.props.channel.channel_name; 
      
      return <>
        <div className='main-content-header'>
          <h1 ># {channel_name}</h1>
          <div className='channel-info'><img src={window.personIcon} /><span>{channel.subscriber_ids.length}</span></div>
        </div>
      </>
    } else {
      return <h1>Loading</h1>
    }
  }
}

export default MainHeader