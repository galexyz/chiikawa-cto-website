/** @type {import('tailwindcss').Config} */
module.exports = {
  variants: {
    margin: ["responsive", "hover"],
    textShadow: ["responsive"],
  },
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      textShadow: {
        sm: "0 1px 2px rgba(0, 0, 0, 0.05)",
        DEFAULT: "0 2px 4px rgba(0, 0, 0, 0.10)",
        lg: "0 8px 16px rgba(0, 0, 0, 0.25)",
      },
      maxHeight: {
        144: "36rem",
        120: "30rem",
        90: "22.5rem",
        // 48: "12rem",
        // 44: "11rem",
        // 60: "15rem",
        // 40: "10rem",
        24: "6rem",
        85: "21.25rem",
        5: "5rem",
      },
      transitionProperty: {
        width: "width",
      },
      height: {
        50: "5rem",
        100: "20rem",
        120: "30rem",
        144: "36rem",
      },
      fontSize: {
        "2xs": ["10px", "14px"],
        "3xs": ["8px", "12px"],
        "4xs": ["7px", "11px"],
      },
      colors: {
        "ultra-call-blue": "#386CB4",
        "ultra-call-green": "#28BEC2",
        "ultra-call-green-lighter": "#2ccdd1",
        "ultra-call-black": "#000000B2",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".text-shadow-sm": {
          textShadow: "0 1px 2px rgba(0, 0, 0, 0.05)",
        },
        ".text-shadow": {
          textShadow: "0 2px 4px rgba(0, 0, 0, 0.10)",
        },
        ".text-shadow-lg": {
          textShadow: "0 8px 16px rgba(0, 0, 0, 0.25)",
        },
        ".text-shadow-none": {
          textShadow: "none",
        },
      };

      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
