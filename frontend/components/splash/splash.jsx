import React from 'react';
import { Redirect } from 'react-router-dom';
import SelectedFeature from './features_screen';

class Splash extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      selectedFeat: '1'
    }

    this.update = this.update.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.changeSelection = this.changeSelection.bind(this);
  }

  update(e){
    this.setState({email: e.target.value})
  }

  handleClick(e){
    e.preventDefault();
    this.props.history.push({pathname: '/signup', state: this.state})
  }

  changeSelection(val){
    this.setState({selectedFeat: val})
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
        <div className='chrome'><img className='chrome2' src={window.chrome} /></div>
        <div className='googleGroups'><img className='googleGroups2' src={window.googleGroups} /></div>
        <div className='dell'><img className='dell2' src={window.dell} /></div>
        </div>


    <div className="splash-content">
      <div className="splash-content1">
        <h1>Working? Everyone could use a Snacc</h1>
        <p>Snacc gives your team the power and alignment you need to do your best work.</p>

        <form onSubmit={this.handleClick} className='splash-form'>
          <input type="email" onChange={this.update} value={this.state.email} placeholder='example@email.com'/>
          <input type="submit" value="Sign Up for Free!"/>
        </form>
      </div>
      
      <div className="splash-collabs">
        <h1>Put collaboration at your fingertips</h1>
        <div className='feat-selection'>
            <div className='features-screen'><SelectedFeature selectedFeat={this.state.selectedFeat} /></div>
          <div className='features-options'>
            <ul>
              <li onClick={() => this.changeSelection('1')}>Organize conversations</li>
              <li onClick={() => this.changeSelection('2')}>Share files and Documents?</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    

    </>
  }
}

export default Splash;  