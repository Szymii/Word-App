import React from 'react';
import styled from 'styled-components';

const StyledBtn = styled.button`
  height: 100%;
  width: 100%;
  border: none;
  padding: 12px;
  display: flex;
  background-color: transparent;
  color: ${({ random, theme }) =>
    random ? theme.colors.blue : theme.colors.white};
  /* color: ${({ theme }) => theme.colors.white}; */
  cursor: pointer;
  svg {
    height: 100%;
    width: 100%;
  }
`;

const IconBtn = ({ label, children, ...props }) => {
  return (
    <StyledBtn {...props} aria-label={label}>
      {children}
    </StyledBtn>
  );
};

export default IconBtn;
