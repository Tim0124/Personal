/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	darkMode: "class",
  theme: {
    extend: {
			colors: {
				'midnightBlack': '#13151F',
				'steelBlueGray': '#515162',
				'slateBlue': '#4F688C',
				'deepIndigo': '#1E1F2F',
				'coralRed': '#EC4C56',
				'creamyWhite': '#FAF1E4',
				'deepOrange': '#FF6600',
				'lightGray' : '#C2C2C2',
				'nightBlue' : '#2d364a'
			},
			backgroundImage: {
        'dark-theme': "url('/dark-background.svg')",
        'light-theme': "url('/light-background.svg')",
      },
		},
  },
  plugins: ["prettier-plugin-astro", "prettier-plugin-tailwindcss"],
};
