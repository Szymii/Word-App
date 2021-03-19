import React from 'react';
import styled from 'styled-components';

const StyledBtn = styled.button`
  height: 100%;
  width: 100%;
  border: none;
  padding: 12px;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  svg {
    height: 100%;
    width: 100%;
  }
`;

const DeleteBtn = ({ children, ...props }) => {
  return <StyledBtn {...props}>{children}</StyledBtn>;
};

export default DeleteBtn;
