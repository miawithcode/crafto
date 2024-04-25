/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      white: '#FFFFFF',
      rose: '#FC5C7D',
      purple: '#6A82FB',
      divider: '#0C0D0E',
      bgBody: '#fafafa',
      bgGray: '#f3f4f6',
      bgBlack: '#1A1A1A',
      bgLightGray: '#e5e7eb',
      bgBlackLight: '#262626',
      textBlack: '#0C0D0E',
      textMuted: '#6D6D6E',
      transparent: 'transparent',
    },
    keyframes: {
      shimmer: {
        '100%': {
          transform: 'translateX(100%)',
        },
      },
    },
    extend: {},
  },
  plugins: [],
};
