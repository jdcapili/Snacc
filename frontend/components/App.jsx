import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import { AuthRoute,ProtectedRoute } from '../util/route_util';
import MainPage from './main_page/main_page';
// import GreetingContainer from './greeting/greeting_container'
// import Splash from './splash/splash';
// import SigninFormContainer from './session_form/signin_form_container';
// import SignupFormContainer from './session_form/signup_form_container';
import AuthComp from './auth_compilation';
import Modal from './modal/trial_modal';



const App = () => {
  // debugger
  return <>
    <Modal />
    <Switch>
    <ProtectedRoute exact path='/main' component={MainPage} />

    <AuthRoute path='/' component={AuthComp} />
    </Switch>
  </>
}

export default App;