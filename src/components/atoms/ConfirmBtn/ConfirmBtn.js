import styled from 'styled-components';

export const ConfirmBtn = styled.button`
  position: absolute;
  bottom: 15%;
  padding: 12px 35px;
  border: none;
  font-size: ${({ theme }) => theme.fontSize.m};
  background-color: ${({ theme }) => theme.colors.blue};
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  align-items: center;
  cursor: pointer;
  svg {
    margin-left: 20px;
  }
`;
