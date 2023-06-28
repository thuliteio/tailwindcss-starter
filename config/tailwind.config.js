// Source: https://github.com/bep/hugo-starter-tailwind-basic/blob/master/tailwind.config.js

module.exports = {
  darkMode: 'class',
	content: ['./hugo_stats.json'],
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ]
}
