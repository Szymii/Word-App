import React from 'react';
import styled from 'styled-components';
import { FaTrash as TrashIcon } from 'react-icons/fa';

const StyledBtn = styled.button`
  border: none;
  padding: 12px;
  background-color: ${({ theme }) => theme.colors.grey};
  color: ${({ theme }) => theme.colors.white};
  svg {
    height: 100%;
    width: 100%;
  }
`;

const IconBtn = ({ icon, ...props }) => {
  return <StyledBtn {...props}>{icon || <TrashIcon />}</StyledBtn>;
};

export default IconBtn;
