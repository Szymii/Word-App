import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.unactive};
`;
export const StyledLink = styled(NavLink)`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 0.4em;
  svg {
    color: ${({ theme }) => theme.colors.white};
    height: 60%;
    width: auto;
  }
  &.active {
    background-color: ${({ theme }) => theme.colors.blue};
  }
`;
