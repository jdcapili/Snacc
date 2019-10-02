import { connect } from "react-redux";
import { signup,clearErrors } from "../../actions/session_actions";
import SessionForm from "./session_form";

const msp = state => {
  return {
    errors: state.errors.session,
    formType: "Sign Up"
  };
};

const mdp = dispatch => {
  return {
    clearErrors: () => dispatch(clearErrors()),
    action: user_info => dispatch(signup(user_info))
  };
};

export default connect(
  msp,
  mdp
)(SessionForm);
