import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        secondary: '#86caff',
        darkBg: '7b6a8d '
      },
      backgroundImage: {
        'gradient-cover':
          'linear-gradient(90.21deg, rgba(0, 54, 124, 0.1) -5.91%, rgba(100, 47, 189, 0.6) 111.58%)'
        // 'linear-gradient(90.21deg, rgba(0, 200, 124, 0.2) -5.91%, rgba(20, 47, 100, 0.5) 111.58%)'
      },
    },
  },
  plugins: [],
};
export default config;
