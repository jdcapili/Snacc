import Message from "./message";
import {
  updateMessage
} from "../../../../actions/message_actions";
import { connect } from "react-redux";


const msp = (state,ownProps) => {
  let {message, subId} = ownProps;
  return {
 currentUserId: state.session.id,
 message,
 subId
}}

const mdp = dispatch => ({
  updateMessage: (message) => dispatch(updateMessage(message))
})

export default connect(msp,mdp)(Message)