import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/app/**/*.{tsx,ts}'],
  darkMode: 'class',
  theme: {
    screens: {
      xs: '320px',
      sm: '425px',
      md: '768px',
      lg: '1024px',
      xl: '1440px',
      '2xl': '1920px',
      '3xl': '2560px',
    },
  },
  plugins: [],
};

export default config;
