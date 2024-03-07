const PromIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={23}
    fill="none"
    {...props}
  >
    <rect width={22} height={22} x={0.249} y={0.531} fill="#fff" rx={11} />
    <path
      stroke="url(#a)"
      strokeWidth={3.796}
      d="M7.036 7.318h8.427v8.427H7.036z"
    />
    <defs>
      <linearGradient
        id="a"
        x1={4.323}
        x2={18.583}
        y1={5.42}
        y2={18.457}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#4F4797" />
        <stop offset={0.499} stopColor="#5C3990" />
        <stop offset={1} stopColor="#6C2F90" />
      </linearGradient>
    </defs>
  </svg>
);
export default PromIcon;
