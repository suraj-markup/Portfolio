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
    // Consistent spacing system
    spacing: {
      'section': '4rem',      // 64px - Standard section spacing
      'section-lg': '6rem',   // 96px - Larger section spacing
      'section-xl': '8rem',   // 128px - Extra large section spacing
      'container': '1rem',    // 16px - Standard container padding
      'container-lg': '1.5rem', // 24px - Larger container padding
      'container-xl': '2rem', // 32px - Extra large container padding
      'content': '2rem',      // 32px - Content spacing
      'content-lg': '3rem',   // 48px - Larger content spacing
      'content-xl': '4rem',   // 64px - Extra large content spacing
    },
    // Consistent container max-widths
    maxWidth: {
      'content': '1200px',
      'content-lg': '1400px',
      'content-xl': '1600px',
    },
  },
};
export const plugins = [
  
];
