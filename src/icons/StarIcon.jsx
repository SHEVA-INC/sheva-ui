import { SvgIcon } from "@mui/material";

const StarIcon = ({ color, fill, fontSize, ...props }) => (
  <SvgIcon fontSize={fontSize}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={19}
      height={19}
      fill="none"
      {...props}
    >
      <g clipPath="url(#a)">
        <path
          fill={fill}
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2.258}
          d="m9.232 2.005 2.326 4.713 5.201.76-3.763 3.666.888 5.179-4.652-2.447-4.652 2.447.888-5.18-3.764-3.665 5.202-.76z"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M.199.5h18.066v18.066H.199z" />
        </clipPath>
      </defs>
    </svg>
  </SvgIcon>
);
export default StarIcon;
