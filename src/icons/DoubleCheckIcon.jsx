import { SvgIcon } from "@mui/material";

const DoubleCheckIcon = ({ fontSize, ...props }) => (
  <SvgIcon fontSize={fontSize}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={23}
      height={22}
      fill="none"
      {...props}
    >
      <path
        stroke="#2DB324"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.32}
        d="m13.167 7.551-7.26 7.26-3.629-3.63M20.756 7.551l-7.258 7.26-1.93-1.931"
      />
    </svg>
  </SvgIcon>
);
export default DoubleCheckIcon;
