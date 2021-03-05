import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled.div`
  height: 100%;
  width: 100%;
  a {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      color: ${({ theme }) => theme.colors.white};
      height: 100%;
      width: auto;
    }
  }
`;

const NavButton = ({ path, icon, ...rest }) => {
  return (
    <StyledLink {...rest}>
      <Link to={path}>{icon}</Link>
    </StyledLink>
  );
};

export default NavButton;
