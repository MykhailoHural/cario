/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost'],
    unoptimized: true
  },
  output: 'export',
  basePath: '',
  assetPrefix: '',
  trailingSlash: true,
}

module.exports = nextConfig
