/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        ion: '#060d17',
        'ion-light': '#10161d',
        icon: '#666666',
        'secondary-color': '#fbc500',
        neon: '#5ef2af',
      },
    },
  },
  plugins: [],
};
