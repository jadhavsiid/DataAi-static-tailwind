/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.html"],
  theme: {
    extend: {
      fontFamily: {
        // Create a custom class name
        'open-sans': ['"Open Sans"', 'sans-serif'],
        
        // Or override the default sans font
        sans: ['"Open Sans"', 'sans-serif'] // Makes all `font-sans` use Open Sans
      },
    },
  },
  plugins: [],
}

