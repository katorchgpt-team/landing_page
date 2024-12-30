import containerQueries from '@tailwindcss/container-queries';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	daisyui: {
		themes: [
			{
				katorch: {
					primary: '#675ca8',

					secondary: '#fbcf5c',

					accent: '#D9C8E2',

					neutral: '#08090A',

					'base-100': '#fffaff',

					info: '#00c0ff',

					success: '#46b40c',

					warning: '#f65000',

					error: '#de0014'
				}
			}
		]
	},

	theme: {
		extend: {}
	},

	plugins: [typography, forms, containerQueries, require('daisyui')]
} satisfies Config;
