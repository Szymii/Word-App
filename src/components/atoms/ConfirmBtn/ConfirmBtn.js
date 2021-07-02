import styled from 'styled-components';

export const ConfirmBtn = styled.button`
  position: absolute;
  bottom: 15%;
  width: ${({ isSmall }) => (isSmall ? '7.5rem' : '10.5rem')};
  padding: 0.6em 0;
  border: none;
  font-size: ${({ theme }) => theme.fontSize.m};
  background-color: ${({ theme, isGray }) =>
    isGray ? theme.colors.gray : theme.colors.blue};
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  svg {
    margin-left: 1.25em;
  }
`;
