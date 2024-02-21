/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");
export default {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',],
	
	theme: {
		extend: {},
	},
	darkMode: 'class',
	plugins: [nextui({
		defaultTheme: 'dark',
		themes: {
			dark: {
				layout: {
					DEFAULT: '#242423',
					background: '#242423',
				},
			},
			light: {
				layout: {
					DEFAULT: '#242423',
					background: '#242423',
				},
			}
		}
	})],
}
