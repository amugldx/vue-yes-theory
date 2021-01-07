module.exports = {
	purge: {
		content: ['./public/**/*.html', './src/**/*.vue'],
		options: {
			whitelistPatterns: [
				/-(leave|enter|appear)(|-(to|from|active))$/,
				/^(?!(|.*?:)cursor-move).+-move$/,
				/^router-link(|-exact)-active$/,
			],
		},
	},

	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				clrWhite: '#e9e9e9',
				clrBlack: '#000815',
				clrBlue: '#154EFF',
				clrYellow: '#FFC742',
				clrGrey: '#0F1A2E',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
