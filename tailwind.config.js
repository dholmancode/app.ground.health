/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './**/*.{html,js,php,jsx,tsx}', // Adjust to match your project structure
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          terracotta: '#E07A5F',  // Primary Accent
          teal: '#3D5A5B',        // Secondary Accent
          peach: '#F4E1D2',       // Background Light
          charcoal: '#2E2E2E',    // Background Dark
          beige: '#EAE3D2',       // Neutral / Highlight
          gold: '#FFCC70',        // Alert / Action
        },
      },
    },
  },
  plugins: [],
};
