import { SvgIcon } from "@mui/material";

const PromIcon = ({ color, fontSize, ...props }) => (
  <SvgIcon fontSize={fontSize} viewBox="0 0 24 24">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill="none"
      {...props}
    >
      <rect width={22} height={22} x={0.249} y={0.531} fill={color} rx={11} />
      <path
        stroke="url(#gradient)"
        strokeWidth={3.796}
        d="M7.036 7.318h8.427v8.427H7.036z"
      />
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4F4797" />
          <stop offset="50%" stopColor="#5C3990" />
          <stop offset="100%" stopColor="#6C2F90" />
        </linearGradient>
      </defs>
    </svg>
  </SvgIcon>
);
export default PromIcon;
