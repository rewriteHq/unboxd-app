import { SideBarWrapper } from './styles';

type ComponentProps = {
  show: boolean;
  onClose: () => void;
};

const Sidebar = ({ show, onClose }: ComponentProps) => {
  return <SideBarWrapper show={show}>SIde ar here</SideBarWrapper>;
};

export default Sidebar;
