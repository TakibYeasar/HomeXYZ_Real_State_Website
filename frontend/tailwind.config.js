/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'primary-color': '#00B98E',
        'secondary-color': '#0E2E50',
        'tertiary-color': '#dcf4ee',
        'font-color': '#0f1113',
        'font-light': '#ffffff',
        'bg-color': '#ffffff',
        'border-color-light': '#eee',
        'nav-color': '#282a2d',
        'dropdown-color': '#fff',
        'bg-light': 'rgba(130, 115, 252, .05)',
        'bg-layer': 'rgb(0 0 0 / 55 %)',
        'bg-grey': '#bab8b8',
        'footer-bg': '#0f1113',
        'card-bg': 'rgb(245, 245, 245)',
      },
    },
  },
  plugins: [
    require('daisyui'),
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}
