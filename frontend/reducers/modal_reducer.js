import { CLOSE_MODAL, OPEN_MODAL } from '../actions/modal_actions';


const modalReducer = (oldState = null, action) => {
  Object.freeze(oldState);
  switch(action.type){
    case OPEN_MODAL: {
      return action.modalType
    }
    case CLOSE_MODAL: {
      return null
    }
    default:
      return oldState;
  }
}

export default modalReducer;