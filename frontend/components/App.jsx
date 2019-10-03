import React from 'react';
import GreetingContainer from './greeting/greeting_container'
import { Route, Link } from 'react-router-dom';
import { AuthRoute,ProtectedRoute } from '../util/route_util';
import Splash from './splash/splash';
import MainPage from './main_page/mainPage';
import SigninFormContainer from './session_form/signin_form_container';
import SignupFormContainer from './session_form/signup_form_container';



const App = () => {
  // debugger
  return <div className="opening-page">
    <header>
      <h1><Link to='/'>S N A C C</Link></h1>
      {/* <GreetingContainer /> */}
      <Route to='/' component={GreetingContainer} />
    </header>

    {/*    */}
    <ProtectedRoute path='/main' component={MainPage} />
    <AuthRoute exact path='/signin' component={SigninFormContainer} />
    <AuthRoute exact path='/signup' component={SignupFormContainer} />
    <AuthRoute exact path='/' component={Splash} />
  </div>
}

export default App;