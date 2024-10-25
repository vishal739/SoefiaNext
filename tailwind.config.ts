import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			primary: '#5457C9',
  			secondary: '#E3E4FF',
  			'tertiary-light': '#FBE0DF',
  			active: '#E9655D',
  			'selected-yellow': '#FBF2E5',
			'backround':'#F8F6F3',
			'text-2':"#70748B",
			'light-red':"#F9F3EB",
			'def-text':"#323750",
			'sec-text':"#9396A5"

  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
