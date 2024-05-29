/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      width: {
        '48%':'48%',
        '90%':'90%',
        '80vw': '80vw', // Custom class to set width to 43vw
        '170px':'170px',
        '420px':'420px',
        '520px':'520px',
      },
      height: {
        '327px':'327px',
        '375px':'375px',

      },
      padding: {
        '1%':'4%',
        },
        'bottom': {
          '8vh':'8vh',
        },
      },
      margin: {
        '2%':'1%'
      },
      
    },

  plugins: [
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
  ],
};
