module.exports = {
	content: ['./pages/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				fwhite: '#fafafa',
				white: '#fff',
				primary: {
					50: '#FFEBEF',
					100: '#FFBECB',
					200: '#FF91A7',
					300: '#FF6483',
					400: '#FF375F',
					500: '#DD2449',
					600: '#BB1536',
					700: '#990926',
					800: '#770118',
					900: '#550011',
				},
				primaryAlt: {
					50: '#FFF0F0',
					100: '#FFC4C4',
					200: '#FF9797',
					300: '#FF6B6B',
					400: '#E25757',
					500: '#C54545',
					600: '#A83636',
					700: '#8A2828',
					800: '#6D1C1C',
					900: '#501212',
				},
			},
			backgroundImage: (theme) => ({
				'mobile-low': "url('/images/bg-mobile-low.jpg')",
			}),
		},
	},
	plugins: [],
}
