const LogoNoBg = () => {
  return (
    <svg
    className="w-9 h-9 md:w-14 md:h-14 inline-block my-auto"
      width="80"
      height="80"
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_2066_3644)">
        <mask
          id="mask0_2066_3644"
          style={{ maskType: 'luminance' }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="80"
          height="80"
        >
          <path d="M80 0.5H0V80.5H80V0.5Z" fill="white" />
        </mask>
        <g mask="url(#mask0_2066_3644)">
          <path
            d="M40 80.5C38.8419 42.6048 37.8952 41.664 0 40.5C37.8952 39.3419 38.8361 38.3952 40 0.5C41.158 38.3952 42.1048 39.3361 80 40.5C42.1048 41.664 41.164 42.5932 40 80.5Z"
            fill="#0C0D0E"
          />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_2066_3644">
          <rect
            width="80"
            height="80"
            fill="white"
            transform="translate(0 0.5)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};
export default LogoNoBg;
