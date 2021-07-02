import styled from 'styled-components';

export const Input = styled.input`
  width: 100%;
  border: solid 0.1em ${({ theme }) => theme.colors.gray};
  padding: 0 1.125em;
  font-size: ${({ theme }) => theme.fontSize.n};
  background-color: transparent;
  color: ${({ theme }) => theme.colors.white};

  &:focus {
    outline: none;
    border-bottom: solid 0.1em ${({ theme }) => theme.colors.blue};
  }
`;
