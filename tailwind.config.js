/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily:{
        
        bodyFont:['Rubik' , 'sans-serif'],
        titleFont:['Inter', "sans-serif"]},
    },
    colors:{
      bodyColor: "#0A192F",
      textGreen:"#4F6F52",
      textLight: "#ccd6f6",
      textDark : "#8892b0",
      hoverColor: "rgba(100,255,218,0.1)"
    },
    screens:{
      xs:"320px",
      sm:"375px",
      sml:"500px",
      md:"667px",
      mdl:"768px",
      lg:"960px",
      lgl:"1024px",
      xl:"1280px",
    },
    
  },
  plugins: [],
}
