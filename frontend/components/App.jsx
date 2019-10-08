import React from 'react';
import { Switch,Route } from 'react-router-dom';
import { AuthRoute,ProtectedRoute } from '../util/route_util';
import MainPage from './main_page/main_page';
import GreetingContainer from './greeting/greeting_container'
import Splash from './splash/splash';
import SigninFormContainer from './session_form/signin_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import Modal from './modal/trial_modal';
// import ChatRoomContainer from './main_page/main_content/chatroom_container'
// import ChatRoom from './main_page/main_content/chatroom';

class App extends React.Component {
constructor(props){
  super(props);
}

render(){

  return <>
    <Modal />
    <Route exact path={['/','/signup', '/signin']} component={GreetingContainer} />
    <Switch>
      <AuthRoute path='/signin' component={SigninFormContainer} />
      <AuthRoute path='/signup' component={SignupFormContainer} />
      <ProtectedRoute path='/main' component={MainPage} />
      <AuthRoute path='/' component={Splash} />
    </Switch>
    

    {/* <footer> <button><img src={window.github} alt='github/snacc'/></button></footer> */}
  </>
}
}

export default App;