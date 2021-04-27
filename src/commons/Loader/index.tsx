import React from 'react';
import styled from 'styled-components';

export const LoadWrapper = styled.div<{ show: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(2px);
  z-index: ${(props) => (props.show ? 10 : -1)};
  opacity: ${(props) => (props.show ? 1 : 0)};
`;

type ComponentProps = {
  show: boolean;
};

const Loader = ({ show }: ComponentProps) => {
  return <LoadWrapper show={show} />;
};

export default Loader;
