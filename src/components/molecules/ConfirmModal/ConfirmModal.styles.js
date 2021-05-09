import styled from 'styled-components';

export const TitleWrapper = styled.h2`
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  svg {
    height: 44px;
  }
`;
export const ButtonWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-evenly;
  margin-top: 40px;
  button {
    position: relative;
  }
`;
