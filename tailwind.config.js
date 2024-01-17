/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        md: '1.5rem',
        lg: '2rem'
      }
    },
    extend:{
      colors:{
        // primary: '#000552', 
        primary:'#1d68e5',
        secondary : '#EEF1FF',
        tertiary : '#4f46e5',
        secondprimary: '#000552', 
        "black" : '#1e293b', 
        "gray" : "#9ca3af", 
      }
    }
  },
  plugins: []
}
