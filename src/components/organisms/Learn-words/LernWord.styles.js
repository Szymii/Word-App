import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 80px 20px 160px 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.fontSize.l};
  }
`;

export const IconWrapper = styled.div`
  position: absolute;
  bottom: 15%;
  left: calc(50% - 10.5rem);
  width: 53px;
`;
