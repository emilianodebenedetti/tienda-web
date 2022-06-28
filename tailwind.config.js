module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    colors: {
      cream:'#fef3c7',
      orange:'#ff8243',
      white: '#fffbeb',
      black: '#686868'
    }
  },
  plugins: [require("daisyui")],
}


/* colors: {
      cream:'#fef3c7', /* #fed7aa,  
      orange:'#fb923c', /* #f97316,  
      white: '#fffbeb', /* #fef3c7, #fffbeb 
    } */