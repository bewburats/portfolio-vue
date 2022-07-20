module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
      "./node_modules/flowbite/**/*.js"
  
  ],
  theme: {
    extend: { fontFamily: {
      prompt: ['Prompt', 'sans-serif'],
      kanit: ['Kanit', 'sans-serif'],
    },
    backgroundImage: {
      home: "url('../images/bg-home-3.png')",
      
    },
  },
  },
  plugins: [
    require('flowbite/plugin')
],
}

