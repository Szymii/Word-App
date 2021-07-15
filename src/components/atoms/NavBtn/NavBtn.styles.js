import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;

  width: 4em;
  height: 4em;
  cursor: pointer;
  padding: 0.7em;
  background-color: ${({ theme }) => theme.colors.darkGray};
  border: 0.1em solid ${({ theme }) => theme.colors.blue};
  border-radius: 50%;
  color: ${({ theme }) => theme.colors.white};
  overflow: hidden;

  & > svg {
    width: 70%;
    height: auto;
  }

  &.active {
    background-color: ${({ theme }) => theme.colors.blue};
  }
`;
