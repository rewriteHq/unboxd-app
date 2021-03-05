import React from 'react';
import {
  Head,
  HeaderTitle,
  ModalBottom,
  ModalMain,
  ModalWrapper,
} from './styles';
import { ModalComponentProps, ModalHeaderComponentProps } from './types';

const Modal: React.FC<ModalComponentProps> | null = ({ show, children }) => {
  return show ? <ModalWrapper>{children}</ModalWrapper> : null;
};

const Header: React.FC<ModalHeaderComponentProps> = ({ goBack, children }) => {
  return (
    <Head>
      <a href="#0" onClick={goBack}>
        ←
      </a>
      <HeaderTitle>{children}</HeaderTitle>
      <div>Finish</div>
    </Head>
  );
};

const Main: React.FC = ({ children }) => {
  return <ModalMain>{children}</ModalMain>;
};

const Bottom: React.FC = ({ children }) => {
  return <ModalBottom>{children}</ModalBottom>;
};

Modal.Header = Header;
Modal.Main = Main;
Modal.Bottom = Bottom;
export default Modal;
