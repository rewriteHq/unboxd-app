import { useRef } from 'react';
import useOnClickOutside from '../../../hooks/useOnClickOutside';
import { ModalWrapper, ModalContent } from './styles';
import { ModalComponentProps } from './types';

const ImageModal = ({ show, children, onClose }: ModalComponentProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  useOnClickOutside(ref, onClose);
  return show ? (
    <ModalWrapper>
      <ModalContent ref={ref}>{children}</ModalContent>
    </ModalWrapper>
  ) : null;
};

export default ImageModal;
