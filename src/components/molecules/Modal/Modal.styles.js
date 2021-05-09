import styled from 'styled-components';
import Modal from 'react-modal';

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
  &__overlay {
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    background-color: rgba(255, 255, 255, 0.25);
  }

  &__content {
    position: absolute;
    width: 300px;
    height: 180px;
    background-color: ${({ theme }) => theme.colors.black};
    top: 20%;
    left: 50%;
    transform: translateX(-50%);
    border: solid 1px ${({ theme }) => theme.colors.blue};

    &:focus {
      outline: none;
    }
  }
`;
