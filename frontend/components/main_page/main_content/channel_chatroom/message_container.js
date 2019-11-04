import Message from "./message";
import { connect } from "react-redux";


const msp = (state,ownProps) => {
  let {message,channel} = ownProps;

  return {
 currentUserId: state.session.id,
 message,
 channel,
 author: state.entities.users[message.author_id]
}}

const mdp = dispatch => ({
  updateMessage: (message) => dispatch(updateMessage(message))
})

export default connect(msp,mdp)(Message)