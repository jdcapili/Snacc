import React from 'react';
import { Redirect } from 'react-router-dom';

class Splash extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      email: ''
    }

    this.update = this.update.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  update(e){
    this.setState({email: e.target.value})
  }

  handleClick(e){
    e.preventDefault();
    this.props.history.push({pathname: '/signup', state: this.state})
  }

  render(){
    return <div className="splash-content"><h1>Working? Everyone could use a Snacc</h1>
      <p>Snacc gives your team the power and alignment you need to do your best work.</p>

      <form onSubmit={this.handleClick} className='splash-form'>
        <input type="email" onChange={this.update} value={this.state.email} placeholder='example@email.com'/>
        <input type="submit" value="Sign Up for Free!"/>
      </form>
    </div>
  }
}

export default Splash;  