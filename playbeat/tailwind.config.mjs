/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");
export default {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',],
	
	theme: {
		colors: {
			background: '#242423',
			grey: "#3f3f3f",
			black: "#000000",
			white: "#ffffff",
			bluePB: "#6985C0"
		},
		extend: {},
	},
	darkMode: 'class',
	plugins: [nextui({
		defaultTheme: 'dark',
		themes: {
			
			dark: {
				colors: {
					
					background: '#242423',
				},
			},
			
		}
	})],
}
