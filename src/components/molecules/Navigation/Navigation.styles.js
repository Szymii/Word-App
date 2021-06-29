import styled from 'styled-components';

export const StyledNav = styled.nav`
  position: absolute;
  bottom: 0;
  height: 65px;
  width: 100%;
  padding: 15px;
  background-color: ${({ theme }) => theme.colors.unactive};
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-top: solid 1px ${({ theme }) => theme.colors.blue};
  span {
    height: 100%;
    width: 1px;
    background-color: ${({ theme }) => theme.colors.white};
  }
`;
