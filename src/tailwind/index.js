/**
 * Tailwind Config
 */
/* eslint-disable @typescript-eslint/ban-ts-comment */

import theme from './theme'

export default {
	theme: theme,
	variants: {
		extend: {
			backgroundColor: ['active'],
			textColor: ['active'],
			opacity: ['disabled'],
			minHeight: ['hover'],
			display: ['dark'],
		},
	},
	corePlugins: {
		container: false,
	},
};
