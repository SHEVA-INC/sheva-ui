import { SvgIcon } from "@mui/material";

const TikTokIcon = ({ color, fontSize, ...props }) => (
  <SvgIcon fontSize={fontSize} viewBox="0 0 24 26">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={26}
      fill="none"
      {...props}
    >
      <path
        fill={color}
        d="M21.413 10.624h-.048c-2.198 0-4.206-.669-5.83-1.864v8.556c0 4.302-3.49 7.743-7.792 7.743A7.71 7.71 0 0 1 0 17.316c0-4.302 3.441-7.791 7.743-7.791.383 0 .717.048 1.1.096v4.301a3 3 0 0 0-1.1-.19c-1.96 0-3.585 1.624-3.585 3.584S5.783 20.9 7.743 20.9s3.585-1.625 3.585-3.585V.586h4.206v.096c0 .335 0 .67.096 1.004a5.81 5.81 0 0 0 2.58 3.824 5.6 5.6 0 0 0 3.155.956h.048z"
      />
    </svg>
  </SvgIcon>
);

export default TikTokIcon;
