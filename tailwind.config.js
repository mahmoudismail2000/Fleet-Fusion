 /** @type {import('tailwindcss').Config} */
export default {
   content: ["./src/**/*.{html,js}","./node_modules/flowbite/**/*.js"],
   theme: {
     extend: {
      colors:{
        "--main-color":"#00B27C",
        "--second-color":"#041E3F",
        "--third-color":"#E8FAF5",
        "span-color":"#74767E",
      },
      
     },
   },
   plugins: [require("flowbite/plugin")],
 }