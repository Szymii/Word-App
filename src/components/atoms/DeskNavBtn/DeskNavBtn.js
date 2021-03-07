import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.unactive};
`;
const StyledLink = styled(NavLink)`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 5px;
  svg {
    color: ${({ theme }) => theme.colors.white};
    height: 60%;
    width: auto;
  }
  &.active {
    background-color: ${({ theme }) => theme.colors.blue};
  }
`;

const NavButton = ({ path, icon, ...rest }) => {
  return (
    <Wrapper {...rest}>
      <StyledLink activeClassName="active" exact to={path}>
        {icon}
      </StyledLink>
    </Wrapper>
  );
};

export default NavButton;
