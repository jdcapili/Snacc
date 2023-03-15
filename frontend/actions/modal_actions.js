export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL'

export const openModal = (modalType, modalData) => {
  
  return {
  type: OPEN_MODAL,
  modalType,
  datum: modalData
  }
};

export const closeModal = () => ({
  type: CLOSE_MODAL
})