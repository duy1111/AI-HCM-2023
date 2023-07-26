/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      width: {
        1100: "1100px",
      },
      backgroundColor: {
        primary: "#fff",
        secondary1: "#1266dd",
        secondary2: "#E03C31",
        secondary3: "rgb(255, 236, 235)",
      },
      maxWidth: {
        '600':'600px',
        '1100':'1100px',
      },
      cursor:{
        pointer:'pointer',
      }

    },
  },
  plugins: [],
};
