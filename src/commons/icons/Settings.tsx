import React from 'react';
import Colors from '../../constants/Colors';
import { IconProps } from './types';

const Settings = ({ fill = Colors.green, className = '' }: IconProps) => {
  return (
    <svg
      width="21"
      height="21"
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.7392 1.84464C12.2594 -0.614879 8.74058 -0.614879 8.26071 1.84464C7.96873 3.34128 6.319 4.13575 4.96683 3.43089C2.74473 2.27255 0.550734 5.02374 2.1745 6.93236C3.16257 8.09378 2.75512 9.87893 1.36097 10.4967C-0.930104 11.5117 -0.147076 14.9424 2.35754 14.8629C3.88163 14.8146 5.02329 16.2461 4.63699 17.7212C4.00215 20.1453 7.17257 21.6722 8.67207 19.6644C9.58442 18.4427 11.4156 18.4427 12.3279 19.6644C13.8274 21.6722 16.9978 20.1453 16.363 17.7212C15.9767 16.2461 17.1184 14.8146 18.6425 14.8629C21.1471 14.9424 21.9301 11.5117 19.639 10.4967C18.2448 9.87893 17.8374 8.09378 18.8255 6.93236C20.4493 5.02374 18.2552 2.27255 16.0331 3.43089C14.681 4.13575 13.0313 3.34128 12.7392 1.84464ZM10.5 13.9193C12.2738 13.9193 13.7118 12.4814 13.7118 10.7076C13.7118 8.93371 12.2738 7.4958 10.5 7.4958C8.72613 7.4958 7.28822 8.93371 7.28822 10.7076C7.28822 12.4814 8.72613 13.9193 10.5 13.9193Z"
        fill={fill}
      />
    </svg>
  );
};

export default Settings;
