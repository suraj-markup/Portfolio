/** @type {import('tailwindcss').Config} */
export const content = [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}',
];
export const theme = {
  extend: {
    backgroundImage:{
      'custom-gradient': "linear-gradient(90eg, #CD20A3 6.47%, #777EC4 49.65%, #0F8882 87.59%, rgba(255, 255, 255, 0) 100%)",
      'custom-gradient2': "radial-gradient(443.53% 267.01% at 49.91% -30.52%, rgba(25, 214, 205, 0) 14.06%, #19D6CD 100%, rgba(25, 214, 205, 0) 100%)",
    },
    fontFamily: {
      'figma-hand': ['"Figma Hand"', 'cursive'],
    },
  },
};
export const plugins = [
  
];
