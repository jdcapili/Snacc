import DmChannelChat from './dm_chat';
import {fetchGroupMessages} from '../../../../actions/message_actions';
import {fetchDmGroup} from '../../../../actions/dm_group_actions';
import {connect} from 'react-redux';

const msp = (state, ownProps) => {
  
  let dmGroup = state.entities.dmGroups[ownProps.match.params.dmGroupId];
  let messages = Object.values(state.entities.messages).filter(message => {
    return dmGroup.message_ids.includes(message.id);
  });

  return {
    currentUser: state.entities.users[state.session.id],
    dmGroup,
    messages
  };
};

const mdp = dispatch => ({
  fetchGroupMessages: id => dispatch(fetchGroupMessages(id)),
  fetchDmGroup: dmGroupId => dispatch(fetchDmGroup(dmGroupId))
});

export default connect(msp,mdp)(DmChannelChat)

