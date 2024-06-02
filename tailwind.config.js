module.exports = {
  darkMode: 'class', 
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'radial-gradient(53.64% 40.08% at 50% 59.92%, rgba(93, 100, 118, 0.68) 0%, rgba(18, 20, 36, 0.68) 100%);',
      },
    },
  },
  plugins: [],
};
