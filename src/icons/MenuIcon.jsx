import { SvgIcon } from "@mui/material";

const MenuIcon = ({ color, fontSize, ...props }) => (
  <SvgIcon fontSize={fontSize} viewBox="0 0 11 11">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={11}
      height={11}
      fill="none"
      {...props}
    >
      <path
        fill={color}
        d="M.452 4.516A.45.45 0 0 1 0 4.064V.452A.45.45 0 0 1 .452 0h3.613a.45.45 0 0 1 .452.452v3.612a.45.45 0 0 1-.452.452zm6.323 0a.45.45 0 0 1-.452-.452V.452A.45.45 0 0 1 6.775 0h3.613a.45.45 0 0 1 .451.452v3.612a.45.45 0 0 1-.451.452zM.452 10.839A.45.45 0 0 1 0 10.388V6.774a.45.45 0 0 1 .452-.451h3.613a.45.45 0 0 1 .452.451v3.614a.45.45 0 0 1-.452.451zm6.323 0a.45.45 0 0 1-.452-.451V6.774a.45.45 0 0 1 .452-.451h3.613a.45.45 0 0 1 .451.451v3.614a.45.45 0 0 1-.451.451z"
      />
    </svg>
  </SvgIcon>
);
export default MenuIcon;
