import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  height: 2em;
  background-color: ${({ theme }) => theme.colors.darkGray};
  font-size: ${({ theme }) => theme.fontSize.m};
  display: flex;
  align-items: center;
  padding-left: 1em;
  color: ${({ theme }) => theme.colors.white};
  p {
    margin: 0;
  }
  z-index: 9;
`;

const Header = () => {
  return (
    <StyledHeader>
      <p>Word App</p>
    </StyledHeader>
  );
};

export default Header;
