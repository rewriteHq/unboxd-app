import React from 'react';
import Colors from '../../constants/Colors';
import { IconProps } from './types';

const Close = ({ fill = Colors.white, className }: IconProps) => {
  return (
    <svg
      width="31"
      height="30"
      viewBox="0 0 31 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M8.22363 7.44769L23.0022 22.2263"
        stroke={fill}
        strokeWidth="1.39735"
        strokeMiterlimit="10"
      />
      <path
        d="M22.8389 7.61011L8.06028 22.3887"
        stroke={fill}
        strokeWidth="1.39735"
        strokeMiterlimit="10"
      />
    </svg>
  );
};

export default Close;
