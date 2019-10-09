import React from 'react';
import { NavLink } from 'react-router-dom';

class Greeting extends React.Component{
  constructor(props){
    super(props);
    
    this.state = {
      signLinks: [],
      headClass: '',
    }
  }

  componentDidMount(){
    
    
    if (this.props.location.pathname === '/signup') {
      
      this.setState({
        signLinks: <NavLink to="/signin" >Sign In</NavLink>,
        headClass: 'form-page'
      });
    } else if (this.props.location.pathname === '/signin') {
      this.setState({
      signLinks: <NavLink to="/signup" >Sign Up</NavLink>,
      headClass: 'form-page'});
    } else {
      this.setState({
        signLinks: [<NavLink to="/signup" key='signup'>Sign Up</NavLink>,
          <NavLink to="/signin" key='signin'>Sign In</NavLink>],
        headClass: ''})
    }
  }
  
  componentDidUpdate(prevProps){
    if(prevProps.location.pathname !== this.props.location.pathname){
      if (this.props.location.pathname === '/signup') {
        
        this.setState({ signLinks: <NavLink to="/signin" >Sign In</NavLink>,
        headClass: 'form-page' });
      } else if (this.props.location.pathname === '/signin') {
        this.setState({
          signLinks: <NavLink to="/signup" >Sign Up</NavLink>,
          headClass: 'form-page'
        });
      } else {
        this.setState({
          signLinks: [<NavLink to="/signup" key='signup'>Sign Up</NavLink>,
          <NavLink to="/signin" key='signin'>Sign In</NavLink>],
          headClass: ''
        })
      }
    }
  }
  
  render(){
    const currentUser = this.props.currentUser;


    

    if(currentUser){
      return(
        <>
        <header className='nav-bar'>
           
            <NavLink to='/'><img src={window.slackLogo} alt="SNACC"/> <h1> S N A C C</h1></NavLink>
          <div className="sign-links">
            <h2 className='user-greeting'>{currentUser.display_name}</h2>
            <button onClick={this.props.logout}>Logout</button>
          </div>
        </header>
        </>
      )
    } else {
      return(
        <>
          <header className={`nav-bar ${this.state.headClass}`}>
            <h1> <NavLink to='/'><img src={window.slackLogo} alt="SNACC" />S N A C C</NavLink></h1>
          <div className="sign-links">
            {this.state.signLinks}
          </div>
        </header>
        </>
      )
    }
  }
}
{/* <img src={window.slackLogo} /> */}
export default Greeting;