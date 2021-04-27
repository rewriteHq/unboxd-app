import React from 'react';
import Colors from '../../constants/Colors';
import { IconProps } from './types';

const Bell = ({ fill = Colors.green, className = '' }: IconProps) => {
  return (
    <svg
      width="21"
      height="21"
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g opacity="0.9">
        <circle cx="10.611" cy="17.3333" r="3.66667" fill="white" />
        <path
          d="M3.80882 7.18887C3.80882 3.39998 6.86438 0.222198 10.6533 0.222198C14.4422 0.222198 17.4977 3.39998 17.4977 7.18887V10.1222C17.4977 11.2222 17.8644 12.2 18.4755 13.0555L19.9422 15.0111C20.5533 15.7444 20.3088 16.8444 19.4533 17.2111C17.8644 17.8222 15.0533 18.6778 10.531 18.6778C6.00882 18.6778 3.19771 17.8222 1.60882 17.2111C0.753264 16.8444 0.631041 15.8667 1.11993 15.0111L2.5866 13.0555C3.44215 12.3222 3.80882 11.2222 3.80882 10.1222V7.18887Z"
          fill={fill}
        />
      </g>
    </svg>
  );
};

export default Bell;
