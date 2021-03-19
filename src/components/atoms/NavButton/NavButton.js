import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
`;
const StyledLink = styled(NavLink)`
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
  &.active > svg {
    color: ${({ theme }) => theme.colors.blue};
  }
`;

const NavButton = ({ path, icon, label, ...rest }) => {
  return (
    <Wrapper {...rest}>
      <StyledLink activeClassName="active" exact to={path} aria-label={label}>
        {icon}
      </StyledLink>
    </Wrapper>
  );
};

export default NavButton;
