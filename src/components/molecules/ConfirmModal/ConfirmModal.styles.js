import styled from 'styled-components';

export const TitleWrapper = styled.h2`
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  svg {
    height: 2.9em;
  }
`;
export const ButtonWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-evenly;
  padding-bottom: 1em;
  button {
    position: relative;
  }
`;
