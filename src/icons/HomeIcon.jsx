import { SvgIcon } from "@mui/material";

const HomeIcon = ({ color, fontSize, padding, ...props }) => (
  <SvgIcon fontSize={fontSize} viewBox="0 0 17 16" sx={{ p: padding }}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={17}
      height={16}
      fill="none"
      {...props}
    >
      <path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9.875 15.25V11.5a.625.625 0 0 0-.625-.625h-2.5a.625.625 0 0 0-.625.625v3.75a.625.625 0 0 1-.625.625H1.75a.625.625 0 0 1-.625-.625V8.023a.65.65 0 0 1 .203-.46l6.25-5.68a.625.625 0 0 1 .844 0l6.25 5.68a.65.65 0 0 1 .203.46v7.227a.624.624 0 0 1-.625.625H10.5a.624.624 0 0 1-.625-.625"
      />
    </svg>
  </SvgIcon>
);
export default HomeIcon;
