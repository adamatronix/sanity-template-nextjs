/** @type {import('next').NextConfig} */
const config = {
  images: {
		domains: ['cdn.sanity.io']
	},
  compiler: {
    styledComponents: true
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    })

    return config
  },
  reactStrictMode: true,
  swcMinify: false
}

export default config
