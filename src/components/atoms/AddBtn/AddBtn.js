import React from 'react';
import styled from 'styled-components';
import { FaPlus } from 'react-icons/fa';

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

const AddBtn = ({ ...props }) => {
  return (
    <StyledBtn {...props}>
      <FaPlus />
    </StyledBtn>
  );
};

export default AddBtn;
