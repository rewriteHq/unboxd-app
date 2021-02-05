import { ButtonHTMLAttributes } from "react";

export interface ButtonComponentProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  gradient?: boolean;
  big?: boolean;
  round?: boolean;
  outline?: boolean;
  loading?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
}