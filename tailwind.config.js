/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js}'],
	theme: {
		container: {
			center: true,
			padding: '1rem',
			screens: {
				sm: '100%',
				md: '100%',
				lg: '1024px',
				xl: '1280px',
			},
		},
		extend: {},
	},
	plugins: [],
};
