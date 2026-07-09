/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        surface: '#fdf8f6',
        'surface-dim': '#ddd9d7',
        'surface-bright': '#fdf8f6',
        'surface-container-lowest': '#ffffff',
        'surface-container-low': '#f7f3f1',
        'surface-container': '#f1edeb',
        'surface-container-high': '#ebe7e5',
        'surface-container-highest': '#e6e2e0',
        'on-surface': '#1c1b1b',
        'on-surface-variant': '#404752',
        'inverse-surface': '#31302f',
        'inverse-on-surface': '#f4f0ee',
        outline: '#717783',
        'outline-variant': '#c0c7d4',
        'surface-tint': '#0060ab',
        primary: '#005faa',
        'on-primary': '#ffffff',
        'primary-container': '#0078d4',
        'on-primary-container': '#ffffff',
        'inverse-primary': '#a3c9ff',
        secondary: '#5e5e5e',
        'on-secondary': '#ffffff',
        'secondary-container': '#e0dfde',
        'on-secondary-container': '#626362',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        serif: ['Source Serif 4', 'serif'],
      },
      spacing: {
        'sidebar': '320px',
      },
    },
  },
  plugins: [],
}
