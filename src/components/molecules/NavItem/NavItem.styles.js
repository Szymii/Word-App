import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(NavLink)`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.m};
  display: flex;
  align-items: center;
  text-decoration: none;
  &.active {
    background-color: ${({ theme }) => theme.colors.blue};
  }
`;

export const ContentWrapper = styled.div`
  padding-left: 1em;
  display: flex;
  align-items: center;
  gap: 1.2em;

  svg {
    height: 1.2em;
    width: auto;
  }
`;
