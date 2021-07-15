import React from 'react';
import { ModalWrapper } from './InfoModal.styles';
import useDimensions from '../../../hooks/useDimensions';

const InfoModal = ({ info }) => {
  const { dimensions } = useDimensions();
  const isMobile = dimensions.width < 860;

  return <ModalWrapper isMobile={isMobile}>{info}</ModalWrapper>;
};

export default InfoModal;
