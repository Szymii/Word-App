import styled, { keyframes } from 'styled-components';
import Modal from 'react-modal';

const anim = keyframes`
  from {
    transform: translateX(-50%) translateY(0);
  }

  to {
    transform: translateX(-50%) translateY(3.2em);
  }
`;

const disappear = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`;

function ReactModalAdapter({ className, ...props }) {
  const contentClassName = `${className}__content`;
  const overlayClassName = `${className}__overlay`;
  return (
    <Modal
      portalClassName={className}
      className={contentClassName}
      overlayClassName={overlayClassName}
      {...props}
    />
  );
}

export const ModalWrapper = styled(ReactModalAdapter)`
  &__content {
    position: absolute;
    width: max-content;
    padding: 0.5em 1.25em;
    background-color: ${({ theme }) => theme.colors.unactive};
    color: ${({ theme }) => theme.colors.white};
    top: 0;
    left: 50%;
    border: solid 0.05em ${({ theme }) => theme.colors.blue};
    font-size: ${({ theme }) => theme.fontSize.m};
    font-weight: bold;
    animation: ${anim} 0.5s linear forwards,
      ${disappear} 3s 1s cubic-bezier(0.83, 0.33, 0.82, 0.3) forwards;

    &:focus {
      outline: none;
    }
  }
`;
