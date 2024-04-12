import { SvgIcon } from "@mui/material";

const ArrowIconLeft = ({ color, fontSize, padding, ...props }) => (
  <SvgIcon fontSize={fontSize} viewBox="0 0 20 20" sx={{ p: padding }}>
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
        d="M16.875 10H3.125M8.75 4.375 3.125 10l5.625 5.625"
      />
    </svg>
  </SvgIcon>
);
export default ArrowIconLeft;
