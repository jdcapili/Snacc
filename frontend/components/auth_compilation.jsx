import React from 'react';
import SigninFormContainer from './session_form/signin_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import Splash from './splash/splash';
import { Route, Link } from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container'
import { AuthRoute, ProtectedRoute } from '../util/route_util';

class AuthComp extends React.Component {

  render(){
    
  return <>
  
    <div className="opening-page">
      <AuthRoute path='/' component={GreetingContainer} />
      <AuthRoute exact path='/signin' component={SigninFormContainer} />
      <AuthRoute exact path='/signup' component={SignupFormContainer} />
      <AuthRoute exact path='/' component={Splash} />
    </div>
  </>
  }
}

export default AuthComp;