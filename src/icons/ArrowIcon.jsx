import { SvgIcon } from "@mui/material";

const ArrowIcon = ({ color, fontSize, opacity, padding, ...props }) => (
  <SvgIcon
    fontSize={fontSize}
    viewBox="0 0 20 20"
    sx={{ opacity: opacity, p: padding }}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={20}
      height={20}
      fill="none"
      {...props}
    >
      <path
        stroke={color}
        strokeWidth={1.2}
        d="M3.125 10h13.75M11.25 4.375 16.875 10l-5.625 5.625"
      />
    </svg>
  </SvgIcon>
);
export default ArrowIcon;
