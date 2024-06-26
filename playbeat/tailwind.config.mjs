/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");
export default {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',],
	
	theme: {
		colors: {
			background: '#121212',
			grey: "#242424",
			black: "#000000",
			white: "#ffffff",
			bluePB: "#6985C0"
		},
		extend: {
			width: {
				'max-1/5': 'calc(100% / 5)'
			}
		},
	},
	darkMode: 'class',
	plugins: [nextui({
		defaultTheme: 'dark',
		themes: {
			
			dark: {
				colors: {
					
					background: '#171717',
				},
			},
			
		}
	})],
}
