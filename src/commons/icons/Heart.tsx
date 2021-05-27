interface IProps {
  className?: string;
  fill?: string
}

const Heart: React.FC<IProps> = (props) => {
  return (
    <svg className={props.className || 'heart'} viewBox="0 0 562 502">
      <path d="M281.847 501.143L46.0461 265.342C-14.5883 204.708 -14.5883 106.458 46.0461 45.8231C106.681 -14.8114 204.931 -14.8114 265.565 45.8231L281.847 62.1046L297.005 46.946C357.64 -13.6885 455.89 -13.6885 516.524 46.946C577.159 107.58 577.159 205.831 516.524 266.465L281.847 501.143Z" />
    </svg>
  );
};

export default Heart;
