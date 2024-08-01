import fluid, { extract } from 'fluid-tailwind';
import type { Config } from 'tailwindcss';
const config: Config = {
  content: {
    files: [
      './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
      './src/components/**/*.{js,ts,jsx,tsx,mdx}',
      './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    extract,
  },
  theme: {
    extend: {
      colors: {
        dark: '#191A23',
        green: '#B9FF66',
        grey: '#F3F3F3',
      },
      boxShadow: {
        card: '5px 5px #191A23',
      },
    },
  },
  plugins: [fluid],
};
export default config;
