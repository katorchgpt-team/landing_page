import containerQueries from '@tailwindcss/container-queries';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';
import flattenColorPalette from 'tailwindcss/lib/util/flattenColorPalette';
import aspectRatio from '@tailwindcss/aspect-ratio';

function addVariablesForColors({ addBase, theme }: any) {
	let allColors = flattenColorPalette(theme('colors'));
	let newVars = Object.fromEntries(
		Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
	);

	addBase({
		':root': newVars
	});
}

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {}
	},

	daisyui: {
		themes: [
			{
				katorch: {
					primary: '#ffed02', // Orange (same as light mode)
					secondary: '#bbc228', // Slightly darker secondary for contrast
					accent: '#56c5b8', // Slightly darker accent
					neutral: '#666b78', // Lighter neutral for dark background
					'base-100': '#111111', // Dark background (same as light mode)
					'base-200': '#1c1e1d', // Darker background for contrast
					'base-300': '#2a2b30' // Even darker for tertiary backgrounds
				}
			}
		]
	},

	plugins: [
		require('tailwindcss-motion'),
		require('daisyui'),
		typography,
		forms,
		containerQueries,
		aspectRatio,
		addVariablesForColors
	]
} satisfies Config;
