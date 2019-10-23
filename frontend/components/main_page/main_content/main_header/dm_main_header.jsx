import React from 'react';

class DmMainHeader extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      buttonState: null
    }

    // this.handleClick = this.handleClick.bind(this);
  }



  // componentDidUpdate(prevProps) {


  //   if ((prevProps.channelId !== this.props.channelId) || (this.props.channel && !this.state.buttonState)) {
  //     let buttonState = this.props.channel.subscriber_ids.includes(this.props.currentUser.id) ? 'leave' : 'join';
  //     this.setState({ buttonState })
  //   }
  // }

  // handleClick() {

  //   let buttonState;
  //   if (!this.props.channel.subscriber_ids.includes(this.props.currentUser.id)) {
  //     buttonState = 'leave';
  //     this.props.createSubscription(this.props.channelId, [this.props.currentUser.id]).then(
  //       () => this.setState({ buttonState }))
  //   } else {
  //     buttonState = 'join';
  //     this.props.deleteSubscription(this.props.channelId).then(
  //       () => this.setState({ buttonState })
  //     )
  //   }
  // }


  render() {


    if (this.props.users.length !== 0) {

      let dm_group_name = "";
      this.props.users.forEach((user,idx) => {
        if(idx === 0) {dm_group_name += user.display_name;}
        else{ dm_group_name += `, ${user.display_name}`}
      })

      // let buttonDisp = this.state.buttonState === 'join' ? 'Join Channel' : 'Leave Channel'

      return <div className='main-content-header'>
          <div>
            <h1 >{dm_group_name}</h1>
            <div className='channel-info'><i className="far fa-user"></i><span>{this.props.users.length + 1}</span>
            </div>
          </div>

          {/* <button className={this.state.buttonState} onClick={this.handleClick}>{buttonDisp}</button> */}
        </div>
     
    } else {
      return <h1>Loading</h1>
    }
  }
}

export default DmMainHeader