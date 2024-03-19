/**
 * Tailwind Config: Theme
 */

import colors from './theme.color';

const fontSizeBase = 16;

const fontSize = {
	// [font-size, { line-height }]
	xs: [`${12 / fontSizeBase}rem`, { lineHeight: `${16 / fontSizeBase}rem` }], // 12px, 16px
	sm: [`${14 / fontSizeBase}rem`, { lineHeight: `${18 / fontSizeBase}rem` }], // 14px, 18px
	base: [`${16 / fontSizeBase}rem`, { lineHeight: `${20 / fontSizeBase}rem` }], // 16px, 20px
	lg: [`${18 / fontSizeBase}rem`, { lineHeight: `${22 / fontSizeBase}rem` }], // 18px, 22px
	xl: [`${20 / fontSizeBase}rem`, { lineHeight: `${14 / fontSizeBase}rem` }], // 20px, 24px
	'2xl': [`${24 / fontSizeBase}rem`, { lineHeight: `${32 / fontSizeBase}rem` }], // 24px, 32px
	'3xl': [`${32 / fontSizeBase}rem`, { lineHeight: `${40 / fontSizeBase}rem` }], // 32px 40px
	'4xl': [`${48 / fontSizeBase}rem`, { lineHeight: `${60 / fontSizeBase}rem` }], // 48px, 60px
	'5xl': [`${64 / fontSizeBase}rem`, { lineHeight: `${80 / fontSizeBase}rem` }], // 64px, 80px
};

const lineHeight = Object.fromEntries(Object.entries(fontSize).map(([key, setting]) => [key, setting[1].lineHeight]));

export default {
	screens: {
		xs: '480px',
		sm: '640px',
		md: '768px',
		lg: '1024px',
		xl: '1281px',
		'2xl': '1440px',
		'3xl': '1800px',
	},
	colors: {
		transparent: 'transparent',
		current: 'currentColor',
		...colors,
	},
	container: {
		center: true,
	},
	fontFamily: {
		sans: ['PublicaSans', 'Helvetica', 'sans-serif'],
		serif: ['Times New Roman', 'serif'],
	},
	fontSize,
	boxShadow: {
		sm: '0px 1px 2px rgba(0, 0, 0, 0.2)',
		md: '0px 4px 8px rgba(0, 0, 0, 0.2)',
		lg: '0px 6px 12px rgba(0, 0, 0, 0.2)',
		xl: '0px 8px 16px rgba(0, 0, 0, 0.2)',
		'2xl': '0px 12px 24px rgba(0, 0, 0, 0.2)',
		inner: 'inset 0px 2px 4px rgba(0, 0, 0, 0.2)',
	},
	extend: {
		borderWidth: {
			3: '3px',
		},
		lineHeight,
		spacing: {
			4.5: '1.125rem',
			97: '25rem',
		},
		transitionProperty: {
			height: 'height',
		},
		minHeight: {
			'30vh': '30vh',
			'50vh': '50vh',
			'75vh': '75vh',
			xs: '20rem',
			sm: '24rem',
			md: '28rem',
			lg: '32rem',
			xl: '36rem',
		},
		zIndex: {
			75: 75,
			100: 100,
		},
	},

	// Custom spacing configuration
	space: {},
};
