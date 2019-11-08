import React from 'react';

class MainHeader extends React.Component {
  constructor(props){
    super(props);

    this.state ={
      buttonState: null
    }

    this.handleClick = this.handleClick.bind(this);
    this.subsToChannel = this.subsToChannel.bind(this);
  }



  componentDidUpdate(prevProps){

    
    if ((prevProps.channelId !== this.props.channelId) || (this.props.channel && !this.state.buttonState)) {
      let buttonState = this.props.channel.subscriber_ids.includes(this.props.currentUser.id) ? 'leave' : 'join';
      this.setState({ buttonState })
    }
  }

  subsToChannel(channel){
    App.cable.subscriptions.create(
      { channel: "ChatChannel", id: channel.id },
      {
        received: data => {

          switch (data.type) {
            case "message":
              
              if (data.datum.message.messageable_id === channel.id) {
                
                this.props.receiveMessage(data.datum, "channel"); //dispatch actions
              }
              break;
          }
        },
        speak: function (data) {
          return this.perform("speak", data);
        },
        update: function (data) {

          return this.perform("update", data);
        },
        load: function () {
          return this.perform("load");
        }
      }
    );
  }

  handleClick(){
    
    let buttonState;
    if (!this.props.channel.subscriber_ids.includes(this.props.currentUser.id)){
      buttonState = 'leave';
      let { channel } = this.props;
      this.subsToChannel(channel);

      this.props.createSubscription(this.props.channelId, [this.props.currentUser.id]).then(
        () => this.setState({ buttonState }))
    } else {
      buttonState = 'join';
      let {channelId} = this.props
      
      App.cable.subscriptions.subscriptions.forEach((subs) => {
        let identifier = JSON.parse(subs.identifier);
        
        if(identifier.channel === "ChatChannel" && identifier.id === channelId){
          subs.unsubscribe();
        }
      });
      
      this.props.deleteSubscription(this.props.channelId).then(
      () => this.setState({ buttonState })
      )
    }
  }
  

  render(){
    let channel_name = '';
    
    if (this.props.channel) {

      channel_name = this.props.channel.channel_name; 
      
      let buttonDisp = this.state.buttonState === 'join' ? 'Join Channel' : 'Leave Channel'
      
      return <>
        <div className='main-content-header'>
          <div>
            <h1 >#{channel_name}</h1>
            
            <div className='channel-info'>
              <div className='star-fave'>
                <i className="far fa-star"></i>
              </div>
              <span className='info-divider'>|</span>
              <div className="member-count">
                <i className="far fa-user"></i>
                <span>{this.props.channel.subscriber_ids.length}</span>
              </div>
            </div>
          </div>

          <button className={this.state.buttonState} onClick={this.handleClick}>{buttonDisp}</button>
        </div>
      </>
    } else {
      return <h1>Loading</h1>
    }
  }
}

export default MainHeader