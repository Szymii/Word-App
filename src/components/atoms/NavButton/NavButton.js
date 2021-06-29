import React from 'react';
import { Wrapper, StyledLink } from './NavButton.styles';

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
