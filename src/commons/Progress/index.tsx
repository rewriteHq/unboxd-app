import { useRef } from 'react';
import styled from 'styled-components';
import Colors from '../../constants/Colors';
import Sizes from '../../constants/Sizes';

const Circle = styled.circle`
  transition: 0.35s stroke-dashoffset;
  transform: rotate(-90deg);
  transform-origin: 50% 50%;
`;
const Vector = styled.svg`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Progress = styled.div`
  position: relative;
  display: inline;

  .percent {
    position: absolute;
    font-size: calc(${Sizes.small - 2}px);
    bottom: 50%;
    left: 0;
    transform: translate(-2%, 65%);
    width: 100%;
    text-align: center;
  }
`;

type ComponentProps = {
  percentage: number;
  radius: number;
  stroke: number;
  className?: string;
};

const ProgressBar = ({ percentage, radius, stroke, className }: ComponentProps) => {
  const normalizedRadius = useRef(radius - stroke * 2);
  const circumference = useRef(normalizedRadius.current * 2 * Math.PI);

  const strokeDashoffset =
    circumference.current - (percentage / 100) * circumference.current;

  return (
    <Progress className={className}>
      <Vector height={radius * 2.2} width={radius * 2.2}>
        {/* <circle /> */}
        <Circle
          r={normalizedRadius.current}
          cx={radius}
          cy={radius}
          strokeWidth={stroke}
          stroke={Colors.dark}
          fill="transparent"
        />
        <Circle
          stroke={Colors.green}
          fill="transparent"
          strokeWidth={stroke}
          style={{ strokeDashoffset }}
          strokeDasharray={circumference.current + ' ' + circumference.current}
          r={normalizedRadius.current}
          cx={radius}
          cy={radius}
        />
      </Vector>
      <span className="percent">{percentage}&#37;</span>
    </Progress>
  );
};

export default ProgressBar;
