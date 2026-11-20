/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        dg: {
          navy: '#122236',
          navyDark: '#0B1522',
          navyLight: '#1C3554',
          gold: '#B86C20',
          goldLight: '#D97706',
          goldSoft: '#FEF3C7',
          canvas: '#FAF8F5',
          surface: '#FFFFFF',
          sectionAlt: '#F3EFE9',
          border: '#E6E0D6',
          borderLight: '#EFEAE1',
          textDark: '#1E293B',
          textBody: '#334155',
          textMuted: '#64748B',
        },
      },
      fontFamily: {
        serif: ['Merriweather', 'Georgia', 'serif'],
        sans: ['Source Sans 3', 'Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
