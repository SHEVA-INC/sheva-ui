import { SvgIcon } from "@mui/material";

const ArrowIcon = ({
  color = "#51379B",
  fontSize,
  opacity,
  padding,
  ...props
}) => (
  <SvgIcon
    fontSize={fontSize}
    viewBox="0 0 24 24"
    sx={{ opacity: opacity, p: padding }}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill="none"
      {...props}
    >
      <path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3.75 12h16.5M13.5 5.25 20.25 12l-6.75 6.75"
      />
    </svg>
  </SvgIcon>
);
export default ArrowIcon;
