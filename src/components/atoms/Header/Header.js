import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.div`
  height: 65px;
  background-color: ${({ theme }) => theme.colors.blue};
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSize.l};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.white};
  p {
    margin: 0;
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <p>Words APP</p>
    </StyledHeader>
  );
};

export default Header;