module.exports = {
  mode: 'jit',
  purge: [
     './components/**/*.{vue,js}',
     './layouts/**/*.vue',
     './pages/**/*.vue',
     './plugins/**/*.{js,ts}',
     './nuxt.config.{js,ts}',
   ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        darkSlateBlue: '#263d9b',
        ghostWhite: '#f6f9fc',
        dimGray: '#5a6880',
        whiteSmoke: '#f5f5f5',
        silver: '#c6c7c7',
        gainsboro: '#e3e3e4'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
