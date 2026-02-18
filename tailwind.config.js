/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Space Grotesk", "sans-serif"],
        body: ["Source Sans 3", "sans-serif"]
      },
      keyframes: {
        rise: {
          "0%": { opacity: "0", transform: "translateY(24px) scale(0.99)" },
          "100%": { opacity: "1", transform: "translateY(0) scale(1)" }
        }
      },
      animation: {
        rise: "rise 700ms cubic-bezier(0.22, 1, 0.36, 1) forwards"
      },
      boxShadow: {
        soft: "0 14px 35px rgba(8, 34, 49, 0.12)"
      }
    }
  },
  plugins: []
};
