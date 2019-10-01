import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component{
  
  render(){
    const currentUser = this.props.currentUser;

    if(currentUser){
      return(
        <div>
          <h2>{currentUser.display_name}</h2>
          <button onClick={this.props.logout}>Logout</button>
        </div>
      )
    } else {
      return(
        <div>
          <Link to="/signup">Sign Up</Link>
          <Link to="/signin">Sign In</Link>
        </div>
      )
    }
  }
}

export default Greeting;