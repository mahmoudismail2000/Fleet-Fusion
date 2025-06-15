 /** @type {import('tailwindcss').Config} */
export default {
   content: ["./src/**/*.{html,js}","./node_modules/flowbite/**/*.js"],
   theme: {
     extend: {
      colors:{
        "--main-color":"#00B27C",
        "--second-color":"#041E3F",
        "--third-color":"#E8FAF5",
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 5s ease-in forwards',
      },
     },
   },
   plugins: [require("flowbite/plugin")],
 }