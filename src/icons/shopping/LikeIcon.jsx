const LikeIcon = ({ color, fill = "none", ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={27}
    height={28}
    fill={fill}
    {...props}
    stroke={color}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.508}
      d="M8.062 4.667c-3.67 0-6.645 2.872-6.645 6.416 0 6.417 7.854 12.25 12.083 13.607 4.229-1.357 12.083-7.19 12.083-13.607 0-3.544-2.975-6.416-6.646-6.416-2.247 0-4.235 1.077-5.437 2.726a6.6 6.6 0 0 0-2.374-2.005 6.8 6.8 0 0 0-3.064-.721"
    />
  </svg>
);
export default LikeIcon;
