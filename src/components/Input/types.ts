import { InputHTMLAttributes } from 'react';

export interface InputComponentProps
  extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  checkLabel?: string;
  error?: any;
  require?: 'true' | 'false' | 'undefined';
  value?: string | number;
  type?: string;
  name?: string;
  register?: any;
  placeholder?: string;
  onChange?: (arg: any) => void;
  onFocus?: (arg: any) => void;
}