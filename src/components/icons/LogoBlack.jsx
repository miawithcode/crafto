const LogoBlack = () => {
  return (
    <svg
      className="w-9 h-9 md:w-11 md:h-11"
      width="100"
      height="100"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_2010_102)">
        <rect width="100" height="100" rx="15" fill="#1A1A1A" />
        <g clipPath="url(#clip1_2010_102)">
          <mask
            id="mask0_2010_102"
            style={{ maskType: 'luminance' }}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="100"
            height="100"
          >
            <path d="M100 0H0V100H100V0Z" fill="white" />
          </mask>
          <g mask="url(#mask0_2010_102)">
            <path
              d="M50 100C48.5524 52.631 47.369 51.455 0 50C47.369 48.5524 48.5452 47.369 50 0C51.4475 47.369 52.631 48.5452 100 50C52.631 51.455 51.455 52.6165 50 100Z"
              fill="white"
            />
          </g>
        </g>
      </g>
      <defs>
        <clipPath id="clip0_2010_102">
          <rect width="100" height="100" rx="15" fill="white" />
        </clipPath>
        <clipPath id="clip1_2010_102">
          <rect width="100" height="100" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
export default LogoBlack;
