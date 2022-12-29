/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    fontFamily: {
      primary: 'Saira',
    },
    container: {
      padding: {
        DEFAULT: '1.5rem',
        // lg: '3rem',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {
      colors: {
        primary: '#23262F',
        accent: '#286F6C',
        grey: {
          DEFAULT: '#919297',
          1: '#D9D9D9',
          2: '#E7E9EB',
          3: '#F5F5F5',
        },
        white: '#fff',
        pink: 'pink',
      },
      backgroundImage: {
        hero: "linear-gradient(rgba(4,9,30,0.7),rgba(4,9,30,0.7)),url('/src/assets/img/hero-bg.jpg')",
        profile: "linear-gradient(rgba(4,9,30,0.7),rgba(4,9,30,0.7)),url('/src/assets/img/profile.webp')",
        contact: "linear-gradient(rgba(4,9,30,0.7),rgba(4,9,30,0.7)),url('/src/assets/img/contact.png')"
      },
      dropShadow: {
        primary: '0px 4px 10px rgba(15, 27, 51, 0.05);',
      },
    },
  },
  plugins: [],
}

// linear-gradient(rgba(4,9,30,0.7),rgba(4,9,30,0.7))