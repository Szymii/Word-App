import styled from 'styled-components';

export const Wrapper = styled.form`
  padding: 3em 1.125em 10em;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.fontSize.l};
  }
`;

export const StyledInput = styled.input`
  width: 60%;
  height: 3.125em;
  margin: 1.25em 0;
  border: solid 0.1em;
  padding: 0 1.25em;
  font-size: ${({ theme }) => theme.fontSize.n};
  background-color: transparent;
  color: ${({ theme }) => theme.colors.white};
  border-color: ${({ correctness }) => {
    switch (correctness) {
      case 'correct':
        return ({ theme }) => theme.colors.correct;
      case 'wrong':
        return ({ theme }) => theme.colors.wrong;
      default:
        return ({ theme }) => theme.colors.gray;
    }
  }};
  &:focus {
    outline: none;
    border-bottom: solid 0.1em ${({ theme }) => theme.colors.blue};
  }
`;

export const IconWrapper = styled.div`
  position: absolute;
  bottom: 15.5%;
  left: calc(50% - 10.5rem);
  width: 3.2em;
`;
