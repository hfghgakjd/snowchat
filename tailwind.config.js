/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,vue}",
    "./pages/**/*.{js,jsx,ts,tsx,vue}",
    "./components/**/*.{js,jsx,ts,tsx,vue}",
    "./layouts/**/*.{js,jsx,ts,tsx,vue}",
    "./app/**/*.{js,jsx,ts,tsx,vue}",
    "./index.html"
  ],
  theme: {
    extend: {
      // Add theme customizations here if needed
    },
  },
  plugins: [
  ],
}

