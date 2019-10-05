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
    return <>
      <div className="splash-bg">
        <div className="alexa"><img className="alexa2" src={window.alexaLogo} /></div>
        <div className='apple'><img className='apple2' src={window.appleLogo} /></div>
        <div className='babel'><img className='babel2' src={window.babel} /></div>
        <div className='ruby'><img className='ruby2' src={window.ruby} /></div>
        <div className='webpack'><img className='webpack2' src={window.webpack} /></div>
        <div className='rubyGem'><img className='rubyGem2' src={window.rubyGem} /></div>
        <div className='dropbox'><img className='dropbox2' src={window.dropbox} /></div>
        <div className='react'><img className='react2' src={window.react} /></div>
        </div>


    <div className="splash-content">
      <h1>Working? Everyone could use a Snacc</h1>
      <p>Snacc gives your team the power and alignment you need to do your best work.</p>

      <form onSubmit={this.handleClick} className='splash-form'>
        <input type="email" onChange={this.update} value={this.state.email} placeholder='example@email.com'/>
        <input type="submit" value="Sign Up for Free!"/>
      </form>
    </div>

    </>
  }
}

export default Splash;  