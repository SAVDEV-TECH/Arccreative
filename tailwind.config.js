
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
     "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes:{
        'slide-left':{
          from:{transform:'translsteX(0px)'},
          to:{transform:'translateX(10px)'}
        },
      },
      animation:{
        'slide-left':'slide-left 1s linear ',
      },
       
      screens:{
        'md':'1160px'
      },
    },
  },
  plugins: [],
}

