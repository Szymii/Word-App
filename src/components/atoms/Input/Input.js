import styled from 'styled-components';

export const Input = styled.input`
  width: 100%;
  border: solid 2px ${({ theme }) => theme.colors.gray};
  padding: 0 20px;
  font-size: ${({ theme }) => theme.fontSize.n};
  background-color: transparent;
  color: ${({ theme }) => theme.colors.white};

  &:focus {
    outline: none;
    border-bottom: solid 2px ${({ theme }) => theme.colors.blue};
  }
`;
