/** @type {import('next').NextConfig} */
const path = require('path');
const nextConfig = {
	reactStrictMode: false,
	sassOptions: {
		includPath: [path.join(__dirname, 'styles')],
		prependDat: `@import "styles/_variables.scss";`,
	},
	images: {
		domains: ['www.themealdb.com'],
	},
	compiler: { styledComponents: true },
};

module.exports = nextConfig;
