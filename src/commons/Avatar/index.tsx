import React from 'react';
import styled from 'styled-components';

const Image = styled.img`
  border-radius: 17px;
  height: 60px;
  width: 60px;
  box-shadow: 0px 11px 16px rgba(0, 0, 0, 0.15);
  object-fit: cover;
`;

type ComponentProps = {
  src: string;
  alt: string;
};

const Avatar = (props: ComponentProps) => {
  return <Image {...props} />;
};

export default Avatar;
