import React from 'react';
import { ModalWrapper } from './InfoModal.styles';

const InfoModal = ({ isOpen, handleModalClose, children }) => {
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

export default InfoModal;
