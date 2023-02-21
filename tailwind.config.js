/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '595': '37.188rem',
        '599': '37.438rem',
        '726': '45.375rem',
      }
    },
  },
  plugins: [],
}
