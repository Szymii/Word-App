import React from 'react';
import { StyledLink } from './NavBtn.styles';

const NavBtn = ({ path, icon, label, ...rest }) => {
  return (
    <StyledLink
      activeClassName="active"
      exact
      to={path}
      {...rest}
      aria-label={label}
    >
      {icon}
    </StyledLink>
  );
};

export default NavBtn;
