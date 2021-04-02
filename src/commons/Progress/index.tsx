import styled from 'styled-components';
import Colors from '../../constants/Colors';

const ProgressWrapper = styled.div<{
  percentage: number;
  indicatorColor?: string;
}>`
  position: relative;
  width: 100%;
  margin: 0.5rem 0;

  .full-bar {
    background: ${Colors.grey};
    height: 1px;
  }

  .indicator {
    width: ${({ percentage }) => percentage}%;
    height: 3px;
    border-radius: 5px;
    background: ${({ indicatorColor }) =>
      indicatorColor ? indicatorColor : Colors.green};
    position: relative;
    bottom: 2px;
  }
`;

type ComponentProps = {
  percentage: number;
  indicatorColor?: string;
};

const ProgressBar = (props: ComponentProps) => {
  return (
    <ProgressWrapper {...props}>
      <div className="full-bar" />
      <div className="indicator" />
    </ProgressWrapper>
  );
};

export default ProgressBar;
