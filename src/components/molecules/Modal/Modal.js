import React from 'react';
import { ModalWrapper } from './Modal.styles';

const Modal = ({ isOpen, handleModalClose, children }) => {
  return (
    <ModalWrapper
      appElement={document.getElementById('root')}
      isOpen={isOpen}
      onRequestClose={handleModalClose}
    >
      {children}
    </ModalWrapper>
  );
};

export default Modal;
