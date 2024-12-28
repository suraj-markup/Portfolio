/** @type {import('tailwindcss').Config} */
export const content = [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}',
];
export const theme = {
  extend: {
    backgroundImage:{
      'custom-gradient': 'linear-gradient(90deg, #FF3BFF 5%, #ECBFBF 30%, #5C24FF 75%, #D94FD5 100%)',
      'custom-gradient2': "radial-gradient(443.53% 267.01% at 49.91% -30.52%, rgba(25, 214, 205, 0) 14.06%, #19D6CD 100%, rgba(25, 214, 205, 0) 100%)",
    },
    fontFamily: {
      'figma-hand': ['"Figma Hand"', 'cursive'],
    },
  },
};
export const plugins = [
  
];
