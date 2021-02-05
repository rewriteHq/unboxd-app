export interface ComponentProps extends React.PropsWithChildren<unknown> {
    
}

export type IRegisterState = {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  signType: string;
};