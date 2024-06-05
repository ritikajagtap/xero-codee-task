import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'regal-blue': '#243c5a',
      },
      // backgroundImage: {
      //   "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      //   "gradient-conic":
      //     "conic-gradient(from 90deg at 50% 50%, var(--tw-gradient-stops))",
      // },
      // backgroundImage: {
      //   "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      //   "gradient-conic": "conic-gradient(from 90deg at 50% 50%, var(--tw-gradient-stops))",
      // },
      // gradientColorStops: {
      //   'light-blue-start': '#add8e6', // Light blue start color
      //   'light-blue-end': '#87cefa',   // Light blue end color (lighter shade)
      // },
    },
  },
  plugins: [],
};
export default config;
