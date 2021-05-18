import styled from 'styled-components';

export const StyledLi = styled.li`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  grid-template-rows: 60px;
  gap: 25px;
  padding: 17px 30px;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.lightGrey};
  div {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  p {
    margin-top: 0;
    margin-bottom: 10px;
    font-size: ${({ theme }) => theme.fontSize.n};
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
