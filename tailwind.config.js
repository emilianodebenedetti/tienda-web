module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      green: '#77dd77',
      grey1: '#e8e8e8',
      greyBtn: '#2b2929',
      white: '#fffbeb',
      black: '#080707',
      red: '#b01717',
    }
    
  },
  plugins: [require("daisyui")],
}
