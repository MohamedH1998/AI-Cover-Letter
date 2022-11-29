/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['https://images.unsplash.com/', 'https://res.cloudinary.com/'],
  }
}

// eslint-disable-next-line no-undef
module.exports = withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})
