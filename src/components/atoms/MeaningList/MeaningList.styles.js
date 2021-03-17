import styled from 'styled-components';

export const StyledItem = styled.div`
  width: 60%;
  padding: 5px;
  margin-top: 30px;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.grey};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.m};
  position: relative;
  cursor: pointer;
`;
