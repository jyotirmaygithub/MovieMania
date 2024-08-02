module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        'bg-color': '#01030a',
        'bg2-color': '#641e16',
        'yellow-color': '#f1c40f',
        'green-color': '#2ecc71',
        'red-color': '#c0392b',
      },
      fontFamily: {
        'lilita': ['Lilita One', 'cursive'],
        'patrick': ['Patrick Hand', 'cursive'],
        'titillium': ['Titillium Web', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
