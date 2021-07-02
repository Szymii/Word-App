import styled from 'styled-components';

export const StyledLi = styled.li`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  grid-template-rows: 3.25em;
  gap: 1.5em;
  padding: 1em 1.875em;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.lightGray};
  div {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  p {
    margin-top: 0;
    margin-bottom: 0.25em;
    font-size: ${({ theme }) => theme.fontSize.m};
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    span {
      font-size: inherit;
      background-color: ${({ theme }) => theme.colors.blue};
    }
  }
  span {
    font-size: ${({ theme }) => theme.fontSize.s};
  }
`;
