import { SvgIcon } from "@mui/material";

const EyeIcon = ({ fontSize, color, ...props }) => (
  <SvgIcon fontSize={fontSize} color={color} viewBox="0 0 20 20">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={20}
      height={20}
      fill="none"
      {...props}
    >
      <path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M10 3.542C3.75 3.542 1.25 10 1.25 10S3.75 16.46 10 16.46 18.75 10 18.75 10 16.25 3.542 10 3.542"
      />
      <path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M10 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"
      />
    </svg>
  </SvgIcon>
);
export default EyeIcon;
