import React from 'react';
import { PageMain } from '../../Layout/styles';
import { Head, HeaderTitle, ModalWrapper } from './styles';
import { ModalComponentProps, ModalHeaderComponentProps } from './types';

const Modal = ({ show, children }: ModalComponentProps) => {
  return show ? <ModalWrapper>{children}</ModalWrapper> : null;
};

const Header: React.FC<ModalHeaderComponentProps> = ({ goBack, children }) => {
  return (
    <Head>
      <a href="/" onClick={goBack}>
        ←
      </a>
      <HeaderTitle>{children}</HeaderTitle>
    </Head>
  );
};

const Main: React.FC = ({ children }) => {
  return <PageMain>{children}</PageMain>;
};

Modal.Header = Header;
Modal.Main = Main;
export default Modal;
