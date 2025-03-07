/** @type {import('tailwindcss').Config} */
const tailwindConfig = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        nunitoSans: ["'Nunito Sans'", "sans-serif"],
      },
      animation: {
        blink: "blink 1.5s ease-in-out infinite",
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0.2 },
        },
      },
    },
  },
  plugins: [],
};

export default tailwindConfig;
