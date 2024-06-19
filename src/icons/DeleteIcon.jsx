import { SvgIcon } from "@mui/material";

const DeleteIcon = ({
  color,
  fontSize,
  opacity,
  padding,
  onClick,
  ...props
}) => (
  <SvgIcon
    fontSize={fontSize}
    viewBox="0 0 16 16"
    sx={{ opacity: opacity, p: padding, cursor: "pointer" }}
    onClick={onClick}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={16}
      height={16}
      fill="none"
      {...props}
    >
      <path stroke={color} strokeWidth={0.927} d="m1 1 9 9M1 10l9-9" />
    </svg>
  </SvgIcon>
);
export default DeleteIcon;
