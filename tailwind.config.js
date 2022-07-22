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
      about:"url('../images/bg-about.png')",
      element : "url('../images/back-element.png')",
      resume : "url('../images/bg-resume-1.png')",
      work : "url('../images/bg-work-1.png')",
      contact : "url('../images/bg-home-2.png')",
    },
  },
  },
  plugins: [
    require('flowbite/plugin'),
    require("daisyui")

],
}

