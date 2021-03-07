export interface LayoutProps
  extends React.PropsWithChildren<unknown>,
    HeaderProps {}

export interface HeaderProps {
  pageTitle: string | React.ReactNode;
  showBack?: boolean;
  navItems?: Array<React.FC<any>>;
}
