export interface LayoutProps
  extends React.PropsWithChildren<unknown>,
    HeaderProps {}

export interface HeaderProps {
  isHome?: boolean;
}
