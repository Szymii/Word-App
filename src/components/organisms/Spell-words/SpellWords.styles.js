import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 80px 20px 160px 20px;
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
  height: 50px;
  margin: 20px 0;
  border: solid 2px;
  padding: 0 20px;
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
        return ({ theme }) => theme.colors.grey;
    }
  }};
  &:focus {
    outline: none;
    border-bottom: solid 2px ${({ theme }) => theme.colors.blue};
  }
`;
