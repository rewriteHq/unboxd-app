export interface ModalComponentProps {
  show: boolean;
  children: React.ReactNode;
}

export interface ModalHeaderComponentProps {
  goBack: () => void;
}
