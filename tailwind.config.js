/** @type {import('tailwindcss').Config} */
 
//const plugin = require('tailwindcss/plugin')
import plugin from 'tailwindcss/plugin'
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
     'sm': {'min':'640px', 'max':'767px'},
     //=> @media (min-width: 640px and max-width: 767px){...}
     'md': {'min': '768px', 'max': '1023px'},
      
      // => @media (min-width: 768px and max-width: 1023px) { ... }
      'lg': {'min': '1024px', 'max': '1279px'},
      // => @media (min-width: 1024px and max-width: 1279px) { ... }
      'xl': {'min': '1280px', 'max': '1535px'},
      // => @media (min-width: 1280px and max-width: 1535px) { ... }
      '2xl': {'min': '1536px'},
      // => @media (min-width: 1536px) { ... }
      

    },
    extend: { keyframes: {
      
          
      slidein: {
        from: {
          opacity: "0",
          transform: "translateX(-70px)",
        },
        to: {
          opacity: "0.5",
          transform: "translateX(0)",
        },
        from: {
          opacity: "0.5",
          transform: "translateX(-70px)",
        },
        to: {
          opacity: "1",
          transform: "translateX(0)",
        },
      },

      'text-slide-2': {
        '0%, 40%': {
            transform: 'translateY(0%)',
        },
        '50%, 90%': {
            transform: 'translateY(-33.33%)',
        },
        '100%': {
            transform: 'translateY(-66.66%)',
        },
    },


    'text-slide-3': {
      '0%, 26.66%': {
          transform: 'translateY(0%)',
      },
      '33.33%, 60%': {
          transform: 'translateY(-25%)',
      },
      '66.66%, 93.33%': {
          transform: 'translateY(-50%)',
      },
      '100%': {
          transform: 'translateY(-75%)',
      },
  },


  'text-slide-4': {
    '0%, 20%': {
        transform: 'translateY(0%)',
    },
    '25%, 45%': {
        transform: 'translateY(-20%)',
    },
    '50%, 70%': {
        transform: 'translateY(-40%)',
    },
    '75%, 95%': {
        transform: 'translateY(-60%)',
    },                            
    '100%': {
        transform: 'translateY(-80%)',
    },
},


'text-slide-5': {
  '0%, 16%': {
      transform: 'translateY(0%)',
  },
  '20%, 36%': {
      transform: 'translateY(-16.66%)',
  },
  '40%, 56%': {
      transform: 'translateY(-33.33%)',
  },
  '60%, 76%': {
      transform: 'translateY(-50%)',
  },
  '80%, 96%': {
      transform: 'translateY(-66.66%)',
  },
  '100%': {
      transform: 'translateY(-83.33%)',
  },
},


'text-slide-6': {
  '0%, 13.33%': {
      transform: 'translateY(0%)',
  },
  '16.66%, 30%': {
      transform: 'translateY(-14.28%)',
  },
  '33.33%, 46.66%': {
      transform: 'translateY(-28.57%)',
  },
  '50%, 63.33%': {
      transform: 'translateY(-42.85%)',
  },
  '66.66%, 80%': {
      transform: 'translateY(-57.14%)',
  },
  '83.33%, 96.66%': {
      transform: 'translateY(-71.42%)',
  },
  '100%': {
      transform: 'translateY(-85.71%)',
  },
},


'text-slide-7': {
  '0%, 11.43%': {
      transform: 'translateY(0%)',
  },
  '14.28%, 25.71%': {
      transform: 'translateY(-12.5%)',
  },
  '28.57%, 40%': {
      transform: 'translateY(-25%)',
  },
  '42.85%, 54.28%': {
      transform: 'translateY(-37.5%)',
  },
  '57.14%, 68.57%': {
      transform: 'translateY(-50%)',
  },
  '71.42%, 82.85%': {
      transform: 'translateY(-62.5%)',
  },
  '85.71%, 97.14%': {
      transform: 'translateY(-75%)',
  },
  '100%': {
      transform: 'translateY(-87.5%)',
  },
},


'text-slide-8': {
  '0%, 10%': {
      transform: 'translateY(0%)',
  },
  '12.5%, 22.5%': {
      transform: 'translateY(-11.11%)',
  },
  '25%, 35%': {
      transform: 'translateY(-22.22%)',
  },
  '37.5%, 47.5%': {
      transform: 'translateY(-33.33%)',
  },
  '50%, 60%': {
      transform: 'translateY(-44.44%)',
  },
  '62.5%, 72.5%': {
      transform: 'translateY(-55.55%)',
  },
  '75%, 85%': {
      transform: 'translateY(-66.66%)',
  },
  '87.5%, 97.5%': {
      transform: 'translateY(-77.77%)',
  },
  '100%': {
      transform: 'translateY(-88.88%)',
  },
},
//Our fall animation keyframes              
   fall: {
    '0%': { transform: 'translate(0%,-150%) skewX(0deg)' },
    '50%': { transform: 'translate(0%,0%) skewX(-10deg)' },
    '100%': { transform: 'translate(0%,150%) skewX(0deg)' },
  },

    },
    animation: {
     
       // You can then reference these keyframes by name in the 
           // animation section of your theme configuration
      fall: 'fall 3s ease infinite',
           // animation shorthand CSS property i.e
           // animation-name | animation-duration | animation-timing-function 
           // animation-iteration-count  
      slidein: "slidein 1s ease var(--slidein-delay, 0) forwards",
      // slidein300: "slidein 1s ease 300ms forwards",
      // slidein500: "slidein 1s ease 500ms forwards",
      // slidein700: "slidein 1s ease 700ms forwards",
      'text-slide-2': 'text-slide-2 5s cubic-bezier(0.83, 0, 0.17, 1) infinite',
      'text-slide-3': 'text-slide-3 7.5s cubic-bezier(0.83, 0, 0.17, 1) infinite',
      'text-slide-4': 'text-slide-4 10s cubic-bezier(0.83, 0, 0.17, 1) infinite',
      'text-slide-5': 'text-slide-5 12.5s cubic-bezier(0.83, 0, 0.17, 1) infinite',
      'text-slide-6': 'text-slide-6 15s cubic-bezier(0.83, 0, 0.17, 1) infinite',
      'text-slide-7': 'text-slide-7 17.5s cubic-bezier(0.83, 0, 0.17, 1) infinite',
      'text-slide-8': 'text-slide-8 20s cubic-bezier(0.83, 0, 0.17, 1) infinite',
                        
    },

    backgroundImage: {
      hero: `url('./airport.jpeg')`,
    },
  },
  },
  plugins: [
    plugin(({ matchUtilities, theme }) => {

        //Add the css properties that you use in tailwind
        matchUtilities({
          'animation-delay': (value) => {
            return {
              'animation-delay': value,
            };
          },
        });
      }),
  ],
}

