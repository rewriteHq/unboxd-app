import styled from 'styled-components';
import Colors from '../../constants/Colors';

const ProgressWrapper = styled.div<{ percentage: number }>`
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
    background: ${Colors.green};
    position: relative;
    bottom: 2px;
  }
`;

type ComponentProps = {
  percentage: number;
};

const ProgressBar = ({ percentage }: ComponentProps) => {
  return (
    <ProgressWrapper percentage={percentage}>
      <div className="full-bar" />
      <div className="indicator" />
    </ProgressWrapper>
  );
};

export default ProgressBar;
