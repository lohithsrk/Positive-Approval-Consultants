/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", "./index.html", "./node_modules/flowbite/**/*.js"

  ], theme: {
    extend: {
      fontFamily: {
        nunito: ['nunito', 'roboto'],
        koulen: ['koulen', 'roboto'],
      },
    },
  },
  plugins: [
    import('flowbite/plugin')
  ],
}

