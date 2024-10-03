/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", // Asegúrate de que la ruta del archivo index.html esté aquí
    "./src/**/*.{js,ts,jsx,tsx}", // Esto cubre todos los archivos .js, .jsx, .ts y .tsx dentro de /src
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
