/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        rose:    { 50:'#fff1f2',100:'#ffe4e6',200:'#fecdd3',300:'#fda4af',400:'#fb7185',500:'#f43f5e',600:'#e11d48',700:'#be123c',800:'#9f1239',900:'#881337' },
        cream:   { 50:'#fffdf5',100:'#fef9e7',200:'#fdf0c2',300:'#fce48f',400:'#f9d257',500:'#f5bc2a',600:'#e09e12',700:'#b97c0e',800:'#9a6210',900:'#7d4f12' },
        blush:   { 50:'#fdf4f5',100:'#fbe8ea',200:'#f7d0d5',300:'#f0adb5',400:'#e67e8c',500:'#d94f62',600:'#c33351',700:'#a42945',800:'#8a2540',900:'#77213b' },
        sand:    { 50:'#faf6f0',100:'#f4ead9',200:'#e9d4b3',300:'#dab885',400:'#cc9958',500:'#bf7e39',600:'#a96530',700:'#8d4f2a',800:'#744228',900:'#5f3824' },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body:    ['"DM Sans"', 'sans-serif'],
        accent:  ['"Dancing Script"', 'cursive'],
      },
      backgroundImage: {
        'hero-pattern': "url('https://images.unsplash.com/photo-1551024506-0bccd828d307?w=1600&q=80')",
        'wavy': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 80'%3E%3Cpath fill='%23fff1f2' d='M0,40 C360,80 720,0 1080,40 C1260,60 1380,50 1440,40 L1440,80 L0,80 Z'/%3E%3C/svg%3E\")",
      },
      keyframes: {
        float:     { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-12px)' } },
        fadeUp:    { from: { opacity:'0', transform:'translateY(28px)' }, to: { opacity:'1', transform:'translateY(0)' } },
        scaleIn:   { from: { opacity:'0', transform:'scale(0.92)' }, to: { opacity:'1', transform:'scale(1)' } },
        slideLeft: { from: { opacity:'0', transform:'translateX(-32px)' }, to: { opacity:'1', transform:'translateX(0)' } },
        pulse2:    { '0%,100%': { transform:'scale(1)' }, '50%': { transform:'scale(1.08)' } },
      },
      animation: {
        float:     'float 4s ease-in-out infinite',
        fadeUp:    'fadeUp 0.7s ease forwards',
        scaleIn:   'scaleIn 0.6s ease forwards',
        slideLeft: 'slideLeft 0.7s ease forwards',
        pulse2:    'pulse2 2.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
