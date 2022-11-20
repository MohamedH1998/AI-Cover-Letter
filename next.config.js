/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["https://images.unsplash.com/", "https://res.cloudinary.com/"],

    allowFutureImage: true,
    layoutRaw: true
  },
}


const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})