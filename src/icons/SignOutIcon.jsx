import { SvgIcon } from "@mui/material";

const SignOutIcon = ({ fontSize, color, ...props }) => (
  <SvgIcon fontSize={fontSize} viewBox="0 0 20 20">
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
        d="M13.594 6.719 16.875 10l-3.281 3.281M8.125 10h8.75M8.125 16.875H3.75a.625.625 0 0 1-.625-.625V3.75a.625.625 0 0 1 .625-.625h4.375"
      />
    </svg>
  </SvgIcon>
);
export default SignOutIcon;
