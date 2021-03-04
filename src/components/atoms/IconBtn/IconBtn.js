import React from 'react';
import styled from 'styled-components';

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

const DeleteBtn = ({ children, ...props }) => {
  return <StyledBtn {...props}>{children}</StyledBtn>;
};

export default DeleteBtn;
