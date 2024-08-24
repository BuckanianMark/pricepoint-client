/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary:'#01040d',
        light:'#222',
        secondary:'#676b75',
        brightorange:'#f0651a',
        darkblue:"#51388a",
        blue:"#14063b",
        sensualLight1:"#efece9",
        sensualLight2:"#ddd9ce",
        sensualMedium:"#ebc1b4",
        sensualdark1:"#ac9c8d",
        sensualdark2:"#610c27",
        sensualdark3:"#050505",
      }
    },
  },
  plugins: [],
}

