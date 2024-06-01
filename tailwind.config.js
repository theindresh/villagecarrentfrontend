/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to right, #35A7A0 20%, #89C8DD 40%, #73ADC1 60%, #EBF3F5 80%)',
      },
    },
  },
  plugins: [],
}
