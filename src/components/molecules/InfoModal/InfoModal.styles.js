import styled, { keyframes } from 'styled-components';

const disappear = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

export const ModalWrapper = styled.div`
  position: absolute;
  width: max-content;
  padding: 0.5em 1.25em;
  background-color: ${({ theme }) => theme.colors.unactive};
  color: ${({ theme }) => theme.colors.white};
  top: 0;
  left: 50%;
  transform: translateX(-50%)
    ${({ isMobile }) => (isMobile ? 'translateY(2.6em)' : 'translateY(0.5em)')};
  border: solid 0.05em ${({ theme }) => theme.colors.blue};
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: bold;
  animation: ${disappear} 2s 1s cubic-bezier(0.83, 0.33, 0.82, 0.3) forwards;
`;
