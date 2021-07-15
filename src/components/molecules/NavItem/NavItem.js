import React from 'react';
import { StyledLink, ContentWrapper } from './NavItem.styles';

const NavItem = ({ path, icon, label, children, ...rest }) => {
  return (
    <StyledLink
      activeClassName="active"
      exact
      to={path}
      {...rest}
      aria-label={label}
    >
      <ContentWrapper>
        {icon}
        {children}
      </ContentWrapper>
    </StyledLink>
  );
};

export default NavItem;
