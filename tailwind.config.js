/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
     "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "tmgrey": "#495e57",
        "tmyellow": "#f4ce14" 
      },
      fontFamily: {
        merriweather: ["Merriweather", "Serif"],
      },
      backgroundColor: ["active"],
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

