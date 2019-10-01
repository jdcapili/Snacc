import React from 'react';
import GreetingContainer from './greeting/greeting_container'
import { Route } from 'react-router-dom';
import SigninFormContainer from './session_form/signin_form_container'
import SignupFormContainer from './session_form/signup_form_container'

const App = () => (
  <div>
    <header>
      <h1>S N A C C</h1>
      <GreetingContainer />
    </header>

    <Route path='/signin' component={SigninFormContainer} />
    <Route path='/signup' component={SignupFormContainer} />
  </div>
)

export default App;