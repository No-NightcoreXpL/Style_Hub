/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        playfair: ['Playfair Display', 'serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
      colors: {
        'stylehub': {
          'navy': '#0F3460', // Azul oscuro elegante
          'gold': '#E2B33C', // Dorado sofisticado
          'lightgold': '#F2D680', // Dorado claro para hover
          'gray': '#F8F9FA', // Gris muy claro para fondos
          'darkgray': '#343A40', // Gris oscuro para textos
          'white': '#FFFFFF', // Blanco puro
          'light': '#F5F5F5', // Blanco hueso para fondos secundarios
        }
      },
    },
  },
}
