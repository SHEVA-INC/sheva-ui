import { SvgIcon } from "@mui/material";

const DropDownIcon = ({ ...props }) => (
  <SvgIcon fontSize="small" viewBox="0 0 17 17">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={17}
      height={17}
      fill="none"
      {...props}
    >
      <path
        stroke="#02021D"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.544}
        d="m4.593 6.549 3.86 3.86 3.862-3.86"
      />
    </svg>
  </SvgIcon>
);
export default DropDownIcon;
