/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: "Poppins",
        Lora: "Lora",
        Roboto: "Roboto"
      }
    },
  },
  plugins: [require("daisyui")],
}

