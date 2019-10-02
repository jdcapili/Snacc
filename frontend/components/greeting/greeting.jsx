import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component{
  constructor(props){
    super(props);
    debugger 
  }

  componentDidMount(){
    // debugger
  }
  
  render(){
    const currentUser = this.props.currentUser;

    // debugger

    if(currentUser){
      return(
        <div className="sign-links">
          <h2>{currentUser.display_name}</h2>
          <button onClick={this.props.logout}>Logout</button>
        </div>
      )
    } else {
      return(
        <div className="sign-links">
          <Link to="/signup" >Sign Up</Link>
          <Link to="/signin" >Sign In</Link>
        </div>
      )
    }
  }
}

export default Greeting;