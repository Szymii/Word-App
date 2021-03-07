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
  &::after {
    ${({ shown }) => {
      if (shown) {
        return `
        content: '';
      `;
      }
    }}
    position: absolute;
    top: 0;
    left: 0;

    background-color: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(5px);
    height: 100%;
    width: 100%;
  }
`;
