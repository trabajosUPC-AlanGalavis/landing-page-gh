/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: "#211951",
				secondary: "#836FFF",
				accent: "#15F5BA",
				light: "#F0F3FF"
			},
			animation: {
				fade: 'fade-down 0.2s ease-in',
			},
			keyframes: {
				'fade-down': {
					'0%': {
						opacity: '0',
						transform: 'translateY(-2rem)',
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)',
					},
				},
			},
		},
	},
	safelist: [
		"animate-fade"
	],
	plugins: [],
}
