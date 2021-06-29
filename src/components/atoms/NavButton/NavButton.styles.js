import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100%;
  width: 100%;
`;
export const StyledLink = styled(NavLink)`
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
