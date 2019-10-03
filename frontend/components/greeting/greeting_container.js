import { connect } from 'react-redux';
import { logout, clearErrors } from '../../actions/session_actions';
import Greeting from './greeting';

const msp = (state) => {
  
  return { currentUser: state.entities.users[state.session.id]}
}

const mdp = dispatch => {
  return {
    logout: () => dispatch(logout()),
    clearErrors: () => dispatch(clearErrors())
  }
}

export default connect(msp,mdp)(Greeting)