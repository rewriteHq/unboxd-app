import React from 'react';
import { Head, HeaderTitle, ModalMain, ModalWrapper } from './styles';
import { ModalComponentProps, ModalHeaderComponentProps } from './types';

const Modal = ({ show, children }: ModalComponentProps) => {
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

Modal.Header = Header;
Modal.Main = Main;
export default Modal;
