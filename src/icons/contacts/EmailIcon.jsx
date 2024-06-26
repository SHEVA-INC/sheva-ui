import { SvgIcon } from "@mui/material";

const EmailIcon = ({ color, fontSize, ...props }) => (
  <SvgIcon fontSize={fontSize} viewBox="0 0 32 27">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={32}
      height={27}
      fill="none"
      {...props}
    >
      <path
        fill={color}
        d="M6.595 23.333q-.92 0-1.536-.616-.617-.617-.617-1.537V6.82q0-.921.617-1.536.616-.617 1.536-.617H26.29q.92 0 1.536.617.617.616.617 1.536v14.36q0 .92-.616 1.536-.618.617-1.537.617zm9.847-9.18L27.109 7.18 26.698 6l-10.256 6.666L6.186 6l-.41 1.18z"
      />
    </svg>
  </SvgIcon>
);
export default EmailIcon;
