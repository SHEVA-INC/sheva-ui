import { SvgIcon } from "@mui/material";

const ArrowIconLeft = ({
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
        d="M20.25 12H3.75M10.5 5.25 3.75 12l6.75 6.75"
      />
    </svg>
  </SvgIcon>
);
export default ArrowIconLeft;
