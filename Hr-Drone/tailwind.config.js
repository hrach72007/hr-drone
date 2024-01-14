/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
    green: "#13ce66",
    black: "#000000",
    blue: "#3776F5",
    gray: '#808080',
    white: '#ffffff'
    },
    fontFamily: {
      sans: [
        "Inter",
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          "Segoe UI",
          'Roboto',
          "Helvetica Neue",
          'Arial',
          "Noto Sans",
          'sans-serif',
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
      ],
      serif: [
        'ui-serif', 
        'Georgia',  
        'Cambria', 
        "Times New Roman", 
        'Times', 
        'serif'
      ]
    }
  },
  plugins: [],
}

