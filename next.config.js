/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	sassOptions: {
		includePaths: [path.join(__dirname, "styles")],
	},
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "ucarecdn.com",
				port: "",
				pathname: "/**",
			},
		],
	},
};

module.exports = nextConfig;
