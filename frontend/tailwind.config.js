/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",  // Make sure it covers your React files
  ],
  theme: {
    extend: {
      colors: {
        "custom-purple": "#6B5B95",
        "custom-purple-dark": "#4B3B6B",
        "custom-bg": "#f3f4f6",
        "custom-text": "#1f2937",
      },
    },
  },
  plugins: [],
};