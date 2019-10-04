import React from 'react';

class SideBar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      channels: [],
      messages: [],
      dropStat: ''
    }
    this.dropDown = null;
    // this.dropDownClick = this.dropDownClick.bind(this)
  }

  // dropDownClick(){
  //   let newVal = this.state.dropStat === '' ? 'active' : ''
  //   this.setState({dropStat: newVal })
  // }

  render(){
    let { currentUser } = this.props

    return <>

      <div className='dropdown-sidebar' >
      <h3>{currentUser.display_name}</h3>
      <nav className={`dropdown-sidebar-content`}>
        <h3>{currentUser.display_name}</h3>
        <h4>{currentUser.email}</h4>
        <button onClick={this.props.logout}>Sign Out</button>
      </nav>
    </div>


    </>
  }
}

export default SideBar