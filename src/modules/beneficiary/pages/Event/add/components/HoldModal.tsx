import React from 'react';
import Modal from '../../../../../../components/Modal';

interface ComponentProps {
  show: boolean;
  onClose: () => void;
}

const HoldModal: React.FC<ComponentProps> = ({ show, onClose, children }) => {
  return (
    <Modal show={show} onClose={onClose}>
      <Modal.Full>{children}</Modal.Full>
    </Modal>
  );
};

export default HoldModal;
