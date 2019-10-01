import { connect } from "react-redux";
import { signup } from "../../actions/session_actions";
import SessionForm from "./session_form";

const msp = state => {
  return {
    errors: state.errors.session,
    formType: "Sign Up"
  };
};

const mdp = dispatch => {
  return {
    action: user_info => dispatch(signup(user_info))
  };
};

export default connect(
  msp,
  mdp
)(SessionForm);
