import React from 'react';
import Colors from '../../constants/Colors';
import { IconProps } from './types';

const User = ({ fill = Colors.green, className = '' }: IconProps) => {
  return (
    <svg
      width="15"
      height="21"
      viewBox="0 0 15 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M12.0796 20.177C13.8053 19.646 15 18.0531 15 16.1947V15.9292C15 11.8141 11.6814 8.36281 7.56637 8.36281C3.45133 8.36281 0 11.8141 0 16.0619C0 17.9203 1.19469 19.3805 2.92035 19.9115C5.57522 20.8407 8.62832 21.1062 12.0796 20.177Z"
        fill={fill}
      />
      <path
        d="M7.43389 6.37168C9.19338 6.37168 10.6197 4.94533 10.6197 3.18584C10.6197 1.42635 9.19338 0 7.43389 0C5.6744 0 4.24805 1.42635 4.24805 3.18584C4.24805 4.94533 5.6744 6.37168 7.43389 6.37168Z"
        fill={fill}
      />
    </svg>
  );
};

export default User;
