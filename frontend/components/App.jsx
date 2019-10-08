import React from 'react';
import { Switch,withRouter } from 'react-router-dom';
import { AuthRoute,ProtectedRoute } from '../util/route_util';
import MainPage from './main_page/main_page';
// import GreetingContainer from './greeting/greeting_container'
// import Splash from './splash/splash';
// import SigninFormContainer from './session_form/signin_form_container';
// import SignupFormContainer from './session_form/signup_form_container';
import AuthComp from './auth_compilation';
import Modal from './modal/trial_modal';
// import ChatRoomContainer from './main_page/main_content/chatroom_container'
// import ChatRoom from './main_page/main_content/chatroom';

class App extends React.Component {
constructor(props){
  super(props);
}

render(){
  debugger
  return <>
    <Modal />
    <Switch>
    <ProtectedRoute path='/main' component={MainPage} />
    <AuthRoute path='/' component={AuthComp} />
    </Switch>
    <footer> <button><img src={window.github} alt='github/snacc'/></button></footer>
  </>
}
}

export default App;