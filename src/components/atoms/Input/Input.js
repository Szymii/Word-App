import styled from 'styled-components';

export const Input = styled.input`
  width: 100%;
  border: none;
  padding: 0 20px;
  font-size: ${({ theme }) => theme.fontSize.n};
  background-color: ${({ theme }) => theme.colors.grey};
  color: ${({ theme }) => theme.colors.white};
`;
