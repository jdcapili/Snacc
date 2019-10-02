import { connect } from 'react-redux';
import { login,clearErrors } from '../../actions/session_actions';
import SessionForm from './session_form';

const msp = state => {
  return{
    errors: state.errors.session,
    formType: "Sign In"
  }
}

const mdp = dispatch => {
  return {
    clearErrors: () => dispatch(clearErrors()),
    action: (user_info) => dispatch(login(user_info))
  }
}

export default connect(msp,mdp)(SessionForm)