import { SvgIcon } from "@mui/material";

const ArrowIcon = ({ color, fontSize, padding, ...props }) => (
  <SvgIcon fontSize={fontSize} viewBox="0 0 13 13" sx={{ p: padding }}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={13}
      height={13}
      fill="none"
      {...props}
    >
      <path
        stroke={color}
        strokeWidth={1.2}
        d="m7.5 1 4.583 4.583m0 0L7.5 10.167m4.583-4.584H0"
      />
    </svg>
  </SvgIcon>
);
export default ArrowIcon;
