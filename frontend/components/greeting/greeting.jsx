import React from 'react';
import { Link } from 'react-router-dom';

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
        signLinks: <Link to="/signin" >Sign In</Link>,
        headClass: 'form-page'
      });
    } else if (this.props.location.pathname === '/signin') {
      this.setState({
      signLinks: <Link to="/signup" >Sign Up</Link>,
      headClass: 'form-page'});
    } else {
      this.setState({
        signLinks: [<Link to="/signup" key='signup'>Sign Up</Link>,
          <Link to="/signin" key='signin'>Sign In</Link>],
        headClass: ''})
    }
  }
  
  componentDidUpdate(prevProps){
    if(prevProps.location.pathname !== this.props.location.pathname){
      if (this.props.location.pathname === '/signup') {
        
        this.setState({ signLinks: <Link to="/signin" >Sign In</Link>,
        headClass: 'form-page' });
      } else if (this.props.location.pathname === '/signin') {
        this.setState({
          signLinks: <Link to="/signup" >Sign Up</Link>,
          headClass: 'form-page'
        });
      } else {
        this.setState({
          signLinks: [<Link to="/signup" key='signup'>Sign Up</Link>,
          <Link to="/signin" key='signin'>Sign In</Link>],
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
           
            <Link to='/'> <h1> <img src={window.slackLogo} />S N A C C</h1></Link>
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
            <h1> <img src={window.slackLogo} /><Link to='/'>S N A C C</Link></h1>
          <div className="sign-links">
            {this.state.signLinks}
          </div>
        </header>
        </>
      )
    }
  }
}

export default Greeting;