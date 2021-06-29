import React from 'react';
import { ConfirmBtn } from '../../atoms/ConfirmBtn/ConfirmBtn';
import { TitleWrapper, ButtonWrapper } from './ConfirmModal.styles';
import { FaTrash } from 'react-icons/fa';

const ConfirmModal = ({ handleModalClose, handleDelete, currentWord }) => {
  const handleConfirm = () => {
    handleModalClose();
    handleDelete(currentWord);
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
