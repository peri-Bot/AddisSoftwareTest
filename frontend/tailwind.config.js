/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./public/index.html",
		"./src/**/*.tsx",
	],
	theme: {
		extend: {
			colors: {
				gruvbox: {
					'dark-hard': '#1d2021',
					'dark0': '#282828',
					'dark1': '#3c3836',
					'dark2': '#504945',
					'dark3': '#665c54',
					'light0': '#fbf1c7',
					'light1': '#ebdbb2',
					'light2': '#d5c4a1',
					'light3': '#bdae93',
					'red': '#fb4934',
					'green': '#b8bb26',
					'yellow': '#fabd2f',
					'blue': '#83a598',
					'purple': '#d3869b',
					'aqua': '#8ec07c',
					'medium': '#928374',
					'orange': '#fe8019',
					'balanceCard': "#adc1ab",
					'borderColor': "#f5ae67",
					'button': "#e2a064",
				},
			},
		},
	},
	plugins: [],
}

