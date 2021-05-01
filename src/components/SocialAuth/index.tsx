import React from 'react';
import { SocialAuthWrapper } from './styles';

type SocialAuthLink = {
  text: string;
  icon: React.FC;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

interface SocialAuthProps {
  options: Array<SocialAuthLink>;
}

const SocialAuth = ({ options }: SocialAuthProps) => {
  return (
    <SocialAuthWrapper>
      {options.map(({ text, onClick, icon: Icon }) => (
        <button onClick={onClick} key={text}>
          <Icon />
          {text}
        </button>
      ))}
    </SocialAuthWrapper>
  );
};

export default SocialAuth;
