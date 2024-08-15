
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
     "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes:{
        'slide-left':{
          from:{transform:'translateX(0)'},
          to:{transform:'translateX(-100%)'}
        },
      },
      animation:{
        'slide-left':'slide-left 15s linear infinite',
      },
      screens:{
        'md':'1160px'
      },
    },
  },
  plugins: [],
}

