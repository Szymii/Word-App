import styled from 'styled-components';

export const ConfirmBtn = styled.button`
  position: absolute;
  bottom: 15%;
  width: 10.5rem;
  padding: 12px 0;
  border: none;
  font-size: ${({ theme }) => theme.fontSize.m};
  background-color: ${({ theme }) => theme.colors.blue};
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  svg {
    margin-left: 20px;
  }
`;
