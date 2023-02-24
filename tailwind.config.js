/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      padding: {
        'tick': '0.5px',
      },
      minHeight:{
        '950':'59.375rem'
      },
      maxHeight: {
        '950': '59.375rem',
      },
      colors: {
        'boder':'rgb(181 222 250)',
        'tweet': 'rgb(29 155 240)',
        'dftweet':'rgb(142 205 247)',
        'hover':'rgb(29, 155, 240, 0.1)',
        'username': 'rgb(15 20 25)',
        'hover2':'rgb(0, 186, 124)',
        'hover2bg':'rgb(0, 186, 124, 0.1)',
        'hover3': 'rgb(249, 24, 128)',
        'hover3bg': 'rgba(249, 24, 128, 0.1)'
      },
      width: {
        'sidebar': '26%',
        'viewpost': '33%',
        'rightitem': '29%',
      }
    },
  },
  plugins: [],
}
