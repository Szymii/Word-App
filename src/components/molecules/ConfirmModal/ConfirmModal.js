import React from 'react';
import { ConfirmBtn } from '../../atoms/ConfirmBtn/ConfirmBtn';
import { TitleWrapper, ButtonWrapper } from './ConfirmModal.styles';
import { FaTrash } from 'react-icons/fa';

const ConfirmModal = ({ handleModalClose, handleDelete, id }) => {
  const handleConfirm = () => {
    handleModalClose();
    handleDelete(id);
  };

  return (
    <>
      <TitleWrapper>
        <FaTrash /> Are you sure?
      </TitleWrapper>
      <ButtonWrapper>
        <ConfirmBtn isSmall autoFocus onClick={handleConfirm}>
          Delete
        </ConfirmBtn>
        <ConfirmBtn isSmall isGray onClick={handleModalClose}>
          Cancel
        </ConfirmBtn>
      </ButtonWrapper>
    </>
  );
};

export default ConfirmModal;
