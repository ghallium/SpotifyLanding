/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderWidth: {
        '1': '1px',
      },
      width: {
        '128': '32rem',
      },
      fontSize: {
        'xxs': '9px',
      },
      screens: {
        'mobile': '320px'
      }
    },
  },
  plugins: [
    
  ],
}

