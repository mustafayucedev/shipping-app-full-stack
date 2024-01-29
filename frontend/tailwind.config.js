/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'gray': "#eaeaea",
        'form': "#9ca3af",
      },
    },
    container: {
      center: true,
      padding: '1rem',
      screens: {
         sm: "100%",
         md: "100%",
         lg: "1024px",
         xl: "1280px"
      }
    },
  },
  plugins: [],
}