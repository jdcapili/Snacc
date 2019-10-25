import { connect } from 'react-redux';
import { logout, clearErrors } from '../../actions/session_actions';
import Greeting from './greeting';
import {withRouter} from 'react-router-dom';

const msp = (state) => {
  
  return { currentUser: state.entities.users[state.session.id]}
}

const mdp = dispatch => {
  return {
    logout: () => dispatch(logout()),
    clearErrors: () => dispatch(clearErrors())
  }
}

export default withRouter(connect(msp,mdp)(Greeting));