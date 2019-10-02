import React from 'react';
import GreetingContainer from './greeting/greeting_container'
import { Route } from 'react-router-dom';
import { AuthRoute,ProtectedRoute } from '../util/route_util';
import Splash from './splash/splash'
import SigninFormContainer from './session_form/signin_form_container'
import SignupFormContainer from './session_form/signup_form_container'

const App = () => (
  <div className="opening-page">
    <header>
      <h1>S N A C C</h1>
      <GreetingContainer />
    </header>

    {/*    */}
    <AuthRoute exact path='/signin' component={SigninFormContainer} />
    <AuthRoute exact path='/signup' component={SignupFormContainer} />
    <Route path='/' component={Splash} />
  </div>
)

export default App;