// Source: https://github.com/bep/hugo-starter-tailwind-basic/blob/master/postcss.config.js

let tailwindConfig = process.env.HUGO_FILE_TAILWIND_CONFIG_JS || './config/tailwind.config.js';
const tailwind = require('tailwindcss')(tailwindConfig);
const autoprefixer = require('autoprefixer');

module.exports = {
  // eslint-disable-next-line no-process-env
	plugins: [tailwind, ...(process.env.HUGO_ENVIRONMENT === 'production' ? [autoprefixer] : [])],
}
