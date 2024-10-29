/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",  // Escanea los archivos dentro de `src`
    "./public/index.html"           // También el HTML principal
  ],
  theme: {
    extend: {
      colors: {
        'primary-color': 'var(--primary-color)',
        'second-color': 'var(--second-color)',
        'three-color': 'var(--three-color)',
      },
    },
  },
  plugins: [],
}


