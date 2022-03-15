const { addUtility } = require("./src/lib/smelte/utils/style.cjs");
const buildPalette = require("./src/lib/smelte/utils/color.cjs");

const config = {
	content: [
		"./src/lib/smelte/**/*.{html,js,svelte,ts}",
	],
	theme: {
		extend: {
			width: {
				'1/7': '14.2857143%',
				'2/7': '28.5714286%',
				'3/7': '42.8571429%',
				'4/7': '57.1428571%',
				'5/7': '71.4285714%',
				'6/7': '85.7142857%'
			}
		},
		fontSize: {
			'5xl': '6rem',
			'4xl': '3.75rem',
			'3xl': '3rem',
			'2xl': '2.125rem',
			xl: '1.5rem',
			lg: '1.25rem',
			base: '1rem',
			sm: '0.875rem',
			xs: '0.75rem'
		},
		breakpoints: {
			sm: { max: '639px' },
			md: { max: '767px' },
			lg: { max: '1023px' },
			xl: { max: '1279px' }
		},
		lineHeight: {
			none: 1,
			tight: 1.25,
			normal: 1.45,
			relaxed: 1.75,
			loose: 2
		},
		colors: {
			transparent: 'transparent',
			white: '#fff',
			'white-trans': 'rgba(255,255,255,0.2)',
			'white-transLight': 'rgba(255,255,255,0.2)',
			'white-transDark': 'rgba(255,255,255,0.2)',
			'black-trans': 'rgba(0,0,0,0.2)',
			'black-transLight': 'rgba(0,0,0,0.2)',
			'black-transDark': 'rgba(0,0,0,0.35)',
			'white-500': '#fff',
			black: '#000',

			...buildPalette({
				primary: '#3949ab',
				secondary: '#009688',
				error: '#f44336',
				success: '#4caf50',
				alert: '#ff9800',
				blue: '#2196f3',
				dark: '#212121'
			}),

			gray: {
				50: '#fafafa',
				100: '#f5f5f5',
				200: '#eeeeee',
				300: '#e0e0e0',
				400: '#bdbdbd',
				500: '#9e9e9e',
				600: '#757575',
				700: '#616161',
				800: '#424242',
				900: '#212121',
				trans: 'rgba(250, 250, 250, 0.5)',
				transLight: 'rgba(250, 250, 250, 0.1)',
				transDark: 'rgba(100, 100, 100, 0.2)'
			}
		}
	},
	variants: {
		backgroundColor: ['dark', 'dark-hover', 'hover'],
		borderColor: ['dark', 'dark-focus'],
		textColor: ['dark', 'dark-hover', 'dark-active']
	},
	plugins: [
		require('tailwind-css-variables')(),
		function ({ addUtilities }) {
			return addUtilities({
				['.border-box']: {
					boxSizing: 'border-box'
				},
				['.content-box']: {
					boxSizing: 'content-box'
				}
			});
		},
		addUtility({
			prop: 'caret-color',
			className: '.caret'
		}),
		addUtility({
			prop: 'stroke',
			className: '.stroke'
		}),
		function ({ addVariant, e }) {
			const d = '.mode-dark';

			addVariant('dark', ({ modifySelectors, separator }) => {
				modifySelectors(({ className }) => {
					return `${d} .${e(`dark${separator}${className}`)}`;
				});
			});

			addVariant('dark-hover', ({ modifySelectors, separator }) => {
				modifySelectors(({ className }) => {
					return `${d} .${e(`dark-hover${separator}${className}`)}:hover`;
				});
			});

			addVariant('dark-focus', ({ modifySelectors, separator }) => {
				modifySelectors(({ className }) => {
					return `${d} .${e(`dark-focus${separator}${className}`)}:focus`;
				});
			});

			addVariant('dark-active', ({ modifySelectors, separator }) => {
				modifySelectors(({ className }) => {
					return `${d} .${e(`dark-active${separator}${className}`)}:active`;
				});
			});
		}
	]
};

module.exports = config;
